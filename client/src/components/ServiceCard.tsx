import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string | React.ReactNode;
  delay?: number;
}

export function ServiceCard({ title, description, image, delay = 0, showDescription = true, index = 0 }: any) {
  return (
    <Link href={`/services/${index}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className="group relative bg-[#0a1120]/80 backdrop-blur-sm border border-white/5 hover:border-primary/30 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 h-full flex flex-col cursor-pointer"
      >
        {/* Background Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-full aspect-video overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-transparent to-transparent opacity-30" />
          </div>
          
          <div className="p-4 md:p-6 flex flex-col flex-1">
            <h3 className="text-sm md:text-lg font-bold text-white group-hover:text-primary transition-colors uppercase tracking-wider leading-tight mb-2 md:mb-4 min-h-[2.5rem] md:min-h-[3rem] flex items-center">
              {title}
            </h3>
            
            {showDescription && (
              <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6 line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
            
            <div className="mt-auto">
              <span className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest group/link hover:brightness-125 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
