import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Component, ReactNode } from "react";

class GoogleTranslateErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean; errorCount: number }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false, errorCount: 0 };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    const isTranslateError =
      error.message?.includes("removeChild") ||
      error.message?.includes("insertBefore") ||
      error.message?.includes("NotFoundError") ||
      error.message?.includes("Failed to execute");

    if (isTranslateError) {
      setTimeout(() => {
        this.setState((s) => ({
          hasError: false,
          errorCount: s.errorCount + 1,
        }));
      }, 50);
    }
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")!).render(
  <GoogleTranslateErrorBoundary>
    <App />
  </GoogleTranslateErrorBoundary>
);
