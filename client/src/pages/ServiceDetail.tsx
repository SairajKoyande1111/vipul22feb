import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, ArrowLeft, Send } from "lucide-react";
import { Link, useRoute } from "wouter";
import { services } from "@/lib/services-data";

export default function ServiceDetail() {
  const [match, params] = useRoute("/services/:id");
  const serviceId = params ? parseInt(params.id) : 0;
  const service = services[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link href="/services">
            <button className="text-primary hover:underline flex items-center gap-2 mx-auto">
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/80 z-10" />
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <Link href="/services">
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 text-primary mb-8 hover:gap-3 transition-all font-bold uppercase tracking-widest text-xs"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Services
            </motion.button>
          </Link>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white uppercase tracking-tight"
          >
            {service.title}
          </motion.h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-20 container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              {service.description}
            </p>

            <h2 className="text-2xl font-bold mb-6 text-primary uppercase tracking-wider">Key Features</h2>
            <div className="grid sm:grid-cols-1 gap-4">
              {service.features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 border border-white/5 hover:border-primary/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-white font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="sticky top-32"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video mb-8">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 border border-white/5">
              <h3 className="text-xl font-bold mb-4 text-white">Interested in this service?</h3>
              <p className="text-muted-foreground mb-6">Contact our technical experts for a customized solution tailored to your requirements.</p>
              <Link href="/contact">
                <button className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group">
                  Get a Free Quote
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
