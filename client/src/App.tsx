import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useState, useEffect, useCallback } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { ChatBot } from "@/components/ChatBot";
import { LoadingScreen } from "@/components/LoadingScreen";
import { InternalLoadingScreen } from "@/components/InternalLoadingScreen";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

import { ScrollToTopButton } from "@/components/ScrollToTop";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

function Router() {
  const [location] = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pendingLocation, setPendingLocation] = useState<string | null>(null);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Skip animation for the very first load of Home page
    if (isInitialLoad) {
      setIsInitialLoad(false);
      return;
    }

    const isMainPage = (path: string) => ['/', '/about', '/services', '/contact'].includes(path);
    const isServiceDetail = (path: string) => path.startsWith('/services/');

    if (location !== prevLocation) {
      setPrevLocation(location);
      
      // Show transition for main pages and service detail pages
      if (isMainPage(location) || isServiceDetail(location)) {
        setIsTransitioning(true);
        setPendingLocation(location);
      }
    }
  }, [location, prevLocation, isInitialLoad]);

  const handleTransitionComplete = useCallback(() => {
    setIsTransitioning(false);
    setPendingLocation(null);
  }, []);

  return (
    <>
      <ScrollToTop />
      {isTransitioning && (
        <InternalLoadingScreen onComplete={handleTransitionComplete} />
      )}
      <div 
        className="relative min-h-full w-full"
        style={{ 
          opacity: isTransitioning ? 0.4 : 1, 
          transition: 'opacity 0.4s ease-in-out',
          filter: isTransitioning ? 'blur(4px)' : 'none'
        }}
      >
        <Switch location={location}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/services/:id" component={ServiceDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy" component={PrivacyPolicy} />
          <Route path="/terms" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoadingComplete = () => setIsLoading(false);
    window.addEventListener('loadingComplete', handleLoadingComplete);
    return () => window.removeEventListener('loadingComplete', handleLoadingComplete);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LoadingScreen />
        {!isLoading && (
          <div className="relative flex h-screen w-full overflow-y-auto overflow-x-hidden">
            <CustomCursor />
            <ChatBot />
            <ScrollToTopButton />
            <Toaster />
            <div className="flex flex-col flex-1 w-full relative min-h-screen">
              <main className="flex-1 relative">
                <Router />
              </main>
            </div>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
