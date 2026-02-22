import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp, Share2, Network } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, x: -20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.5, x: -20 }}
          className="fixed bottom-8 left-8 z-50"
        >
          <div className="relative group">
            {/* Pulsing Networking Aura */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
            />
            
            {/* Connection Lines Animation (Networking Theme) */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {[0, 120, 240].map((rotation) => (
                <motion.div
                  key={rotation}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ rotate: rotation }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-[120%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="relative w-14 h-14 bg-background/80 backdrop-blur-md border border-primary/30 text-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:border-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white overflow-hidden"
              data-testid="button-scroll-to-top"
            >
              {/* Internal Animated Icon */}
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
              >
                <Network className="w-4 h-4 mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ChevronUp className="w-6 h-6 -mt-1 group-hover:scale-110 transition-transform duration-300" />
              </motion.div>

              {/* Networking "Data" Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full left-1/2 -translate-x-1/2 bottom-0"
                    style={{ left: `${20 + i * 20}%` }}
                  />
                ))}
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
