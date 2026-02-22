import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@assets/Untitled_design_1768974869981.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const navbarClasses = `fixed top-0 left-0 right-0 z-[5000] transition-all duration-300 ${
    scrolled ? "bg-background/80 backdrop-blur-md shadow-lg py-2" : "bg-transparent py-4"
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2 md:gap-4 group cursor-pointer h-full">
          <div className="relative w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center p-1 md:p-2 shadow-xl border-2 border-white/20 group-hover:border-primary/50 transition-all duration-300">
            <img 
              src={logo} 
              alt="VIP Networks" 
              className="w-10 h-10 md:w-16 md:h-16 object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-semibold text-lg md:text-2xl tracking-widest leading-none text-white uppercase drop-shadow-md">
              VIP NETWORKS
            </span>
            <span className="text-[6px] md:text-[10px] text-white font-medium tracking-[0.2em] md:tracking-[0.25em] uppercase mt-0.5 md:mt-1 pl-0.5 whitespace-nowrap">
              Visionary | Innovative | Productivity
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <span 
                className={`text-base font-semibold font-poppins uppercase tracking-widest cursor-pointer transition-colors relative py-1
                  text-white
                  group/nav
                `}
              >
                {link.name}
                <motion.div 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-transform duration-300 origin-left
                    ${location === link.href ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}
                  `}
                />
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span 
                    onClick={() => setIsOpen(false)}
                    className={`block text-lg font-medium py-2 border-b border-white/5 cursor-pointer
                      ${location === link.href ? "text-primary" : "text-muted-foreground"}
                    `}
                  >
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
