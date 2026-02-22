import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Cpu, Headphones, Trophy } from "lucide-react";
import { services } from "@/lib/services-data";
import { ServiceCard } from "@/components/ServiceCard";
import worldMapVideo from "@assets/Untitled_design_1769405654510.mp4";
import networkingVideo from "@assets/From_KlickPin_CF_Pin_su_zenziads_1769407670142.mp4";
import servicesHeroVideo from "@/assets/videos/services-hero.mp4";
import servicesDetailsVideo from "@/assets/videos/services-details.mp4";

// Why Choose Images
import experiencedTechImg from "@assets/pexels-cottonbro-6804071_1768889922723.jpg";
import enterpriseSolutionsImg from "@assets/pexels-cookiecutter-17489152_1768889995673.jpg";
import customDesignImg from "@assets/pexels-zeleboba-33693785_1768890006348.jpg";
import supportAMCImg from "@assets/pexels-field-engineer-147254-442150_1768890058149.jpg";
import industryExpertiseImg from "@assets/generated_images/industrial_manufacturing_facility_with_automation.png";

import projectNetwork from "@assets/generated_images/modern_office_network_infrastructure_installation_photo.png";
import projectAV from "@assets/generated_images/commercial_building_smart_lighting_and_av_installation_photo.png";
import projectSecurity from "@assets/generated_images/industrial_facility_security_and_cctv_installation_photo.png";
import projectSmartCity from "@assets/generated_images/smart_city_traffic_monitoring_system_installation_photo.png";
import projectHealthcare from "@assets/generated_images/modern_health_clinic_digital_medical_system_installation_photo.png";
import projectEducation from "@assets/generated_images/university_smart_lecture_hall_av_and_lighting_project_photo.png";
import projectRetail from "@assets/generated_images/luxury_retail_smart_store_security_and_av_project_photo.png";
import projectDataCenter from "@assets/generated_images/large_data_center_networking_and_server_setup_photo.png";

export default function Services() {
  const whyChooseFeatures = [
    {
      icon: Users,
      title: "Experienced Technical Team",
      desc: "Skilled professionals with hands-on expertise in enterprise IT, networking, and security systems.",
      img: experiencedTechImg
    },
    {
      icon: ShieldCheck,
      title: "Enterprise-Grade Solutions",
      desc: "High-performance, scalable solutions built using industry-leading technologies and standards.",
      img: enterpriseSolutionsImg
    },
    {
      icon: Cpu,
      title: "Customized System Design",
      desc: "Tailor-made solutions designed specifically to meet your operational and business requirements.",
      img: customDesignImg
    },
    {
      icon: Headphones,
      title: "Reliable Support & AMC",
      desc: "Proactive maintenance, quick response, and dependable annual support services you can trust.",
      img: supportAMCImg
    },
    {
      icon: Trophy,
      title: "Proven Industry Expertise",
      desc: "Successful deployments across commercial, industrial, and enterprise environments.",
      img: industryExpertiseImg
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />
      
      {/* Header */}
      <div className="pt-32 md:pt-52 pb-16 md:pb-32 bg-secondary relative overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src={servicesHeroVideo}
          />
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-white uppercase tracking-tighter">Our <span className="text-white">Services</span></h1>
          <p className="text-base md:text-2xl font-medium max-w-3xl mx-auto drop-shadow-lg opacity-90">
            Comprehensive technology services tailored to secure, connect, and empower your enterprise.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="py-16 md:py-20 container px-4 md:px-6 mx-auto relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src={servicesDetailsVideo}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} delay={index * 0.1} />
          ))}
        </div>
      </div>

      {/* WHY CHOOSE VIP NETWORKS */}
      <section className="py-16 md:py-32 bg-background relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white font-poppins tracking-tight uppercase">
                Why Choose <span className="text-primary">VIP Networks?</span>
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                Trusted technology partner delivering reliable, secure, and scalable solutions.
              </p>
            </motion.div>
          </div>

          <div className="relative py-12">
            {/* Mobile/Tablet Layout (Alternating Left/Right) */}
            <div className="space-y-12 relative md:hidden">
              <div className="absolute left-1/2 top-0 h-full w-0.5 bg-white/10 -translate-x-1/2 overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-primary to-transparent"
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {whyChooseFeatures.map((feature, idx) => (
                <div key={idx} className="relative flex items-center justify-center">
                  <div className="absolute left-1/2 -translate-x-1/2 z-20">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,1)]" />
                  </div>

                  <div className={`flex items-center w-full ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 px-4 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      {idx % 2 !== 0 ? (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-1">Step {idx + 1}</h4>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 uppercase leading-tight">{feature.title}</h3>
                          <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <h4 className="text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-1">Step {idx + 1}</h4>
                          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 uppercase leading-tight">{feature.title}</h3>
                          <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </motion.div>
                      )}
                    </div>
                    
                    <div className="z-30 flex justify-center w-12 shrink-0">
                      <div className="w-8 h-8 rounded-full border border-primary/50 flex items-center justify-center bg-background shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                        <feature.icon className="w-4 h-4 text-primary" />
                      </div>
                    </div>

                    <div className="w-1/2 px-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Layout (Horizontal Roadmap) */}
            <div className="hidden md:grid md:grid-cols-5 relative">
              <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-primary to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {whyChooseFeatures.map((feature, idx) => (
                <div key={idx} className="relative flex flex-col items-center min-h-[400px]">
                  <div className="absolute top-1/2 -translate-y-1/2 z-20">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(59,130,246,1)]" />
                  </div>

                  <div className="flex flex-col items-center w-full">
                    {idx % 2 === 0 ? (
                      <>
                        <motion.div 
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="absolute bottom-[calc(50%+40px)] flex flex-col items-center"
                        >
                          <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-background group hover:border-primary transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="w-0.5 h-10 bg-gradient-to-t from-primary/50 to-transparent mt-2" />
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="absolute top-[calc(50%+40px)] text-center px-4 w-full"
                        >
                          <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Step {idx + 1}</h4>
                          <h3 className="text-base lg:text-lg font-bold text-white mb-2 uppercase">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{feature.desc}</p>
                        </motion.div>
                      </>
                    ) : (
                      <>
                        <motion.div 
                          initial={{ opacity: 0, y: -20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="absolute bottom-[calc(50%+40px)] text-center px-4 w-full"
                        >
                          <h4 className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Step {idx + 1}</h4>
                          <h3 className="text-base lg:text-lg font-bold text-white mb-2 uppercase">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed max-w-[200px] mx-auto">{feature.desc}</p>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="absolute top-[calc(50%+40px)] flex flex-col items-center"
                        >
                          <div className="w-0.5 h-10 bg-gradient-to-b from-primary/50 to-transparent mb-2" />
                          <div className="w-12 h-12 rounded-full border border-primary/50 flex items-center justify-center bg-background group hover:border-primary transition-colors shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                        </motion.div>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight uppercase">Completed <span className="text-[#3b82f6]">Projects</span></h2>
            <p className="text-white text-lg">A showcase of our successfully delivered infrastructure and security solutions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Enterprise Networking", img: projectNetwork, location: "Corporate Plaza" },
              { title: "Smart Hotel AV", img: projectAV, location: "Grand Regency" },
              { title: "Industrial Security", img: projectSecurity, location: "Manufacturing Hub" },
              { title: "Smart City Traffic", img: projectSmartCity, location: "Urban Center" },
              { title: "Healthcare Systems", img: projectHealthcare, location: "Global Medical Center" },
              { title: "Smart Education AV", img: projectEducation, location: "National University" },
              { title: "Retail Tech Solutions", img: projectRetail, location: "Luxury Mall" },
              { title: "Cloud Data Center", img: projectDataCenter, location: "Tech Park" },
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-[#0d1526] rounded-3xl overflow-hidden border border-white/5 shadow-2xl aspect-[4/5]"
              >
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-[#0d1526]/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <p className="text-[#3b82f6] text-xs font-bold uppercase tracking-widest mb-2">{project.location}</p>
                  <h3 className="text-xl font-bold text-white uppercase tracking-tight">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
