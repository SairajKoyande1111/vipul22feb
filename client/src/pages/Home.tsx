import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { CheckCircle2, Shield, Network, Zap, Lock, Headset } from "lucide-react";
import { services } from "@/lib/services-data";
import logo from "@assets/Untitled_design_1768974869981.png";
import techBot from "@assets/ChatGPT_Image_Feb_22__2026__02_17_46_PM-removebg-preview_1771750118367.png";
import techVideo from "../assets/videos/background-video.mp4";
import generatedSecurity from "@assets/generated_images/professional_cctv_surveillance_camera_system.png";
import generatedAccess from "@assets/generated_images/electronic_office_key_card_reader.png";
import generatedNetwork from "@assets/generated_images/data_center_server_rack_networking_cables.png";
import generatedPower from "@assets/generated_images/industrial_ups_power_backup_system.png";
import indSmartCity from "@assets/generated_images/modern_smart_city_with_connectivity_lines.png";
import indManufacturing from "@assets/generated_images/industrial_manufacturing_facility_with_automation.png";
import indMedical from "@assets/generated_images/advanced_medical_technology_research_lab.png";
import indCorporate from "@assets/generated_images/corporate_office_building_interior_luxury.png";
import indEducation from "@assets/generated_images/educational_technology_and_modern_classroom_setting.png";
import indRetail from "@assets/generated_images/retail_technology_and_smart_store_interior.png";
import indLogistics from "@assets/generated_images/logistics_and_warehouse_automation_technology.png";
import indHospitality from "@assets/generated_images/hospitality_and_smart_hotel_technology.png";
import indIndustriesServed from "@assets/image_1771752208956.png";

// New Industry Images
import imgCorporate from "@/assets/images/industry-corporate.jpg";
import imgManufacturing from "@/assets/images/industry-manufacturing.jpg";
import imgHealthcare from "@/assets/images/industry-healthcare.jpg";
import imgEducation from "@/assets/images/industry-education.jpg";
import imgRetail from "@/assets/images/industry-retail.jpg";
import imgHospitalityNew from "@/assets/images/industry-hospitality.jpg";
import imgGovernment from "@/assets/images/industry-government.jpg";
import imgLogistics from "@/assets/images/industry-logistics.jpg";
import imgStartups from "@/assets/images/industry-startups.jpg";
import imgDatacenter from "@/assets/images/industry-datacenter.jpg";

import projectNetwork from "@assets/generated_images/modern_office_network_infrastructure_installation_photo.png";
import projectAV from "@assets/generated_images/commercial_building_smart_lighting_and_av_installation_photo.png";
import projectSecurity from "@assets/generated_images/industrial_facility_security_and_cctv_installation_photo.png";
import projectSmartCity from "@assets/generated_images/smart_city_traffic_monitoring_system_installation_photo.png";
import projectHealthcare from "@assets/generated_images/modern_health_clinic_digital_medical_system_installation_photo.png";
import projectEducation from "@assets/generated_images/university_smart_lecture_hall_av_and_lighting_project_photo.png";
import projectRetail from "@assets/generated_images/luxury_retail_smart_store_security_and_av_project_photo.png";
import projectDataCenter from "@assets/generated_images/large_data_center_networking_and_server_setup_photo.png";

const testimonials = [
  { name: "Ahmed Al-Sayed", role: "IT Director, Urban Tech", content: "VIP Networks transformed our security infrastructure. Their attention to detail and technical expertise is unmatched." },
  { name: "Sarah Johnson", role: "Operations Manager, Global Logistics", content: "The network reliability they provided has significantly improved our warehouse efficiency. Truly a professional team." },
  { name: "Mark Peterson", role: "CEO, Peterson Enterprise", content: "From initial consultation to final implementation, the experience was seamless. Highly recommend their power solutions." },
  { name: "Fatima Zahra", role: "Hospitality Lead, Azure Resorts", content: "Exceptional smart hotel solutions that have redefined our guest experience completely." },
  { name: "John Smith", role: "Logistics Head, SpeedLink", content: "Their automated warehouse systems are top-tier. Efficiency has increased by over 40% since implementation." },
];

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };


  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <Navbar />
      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100"
          >
            <source src={techVideo} type="video/mp4" />
          </video>
        </div>

        <div className="container relative z-20 px-4 md:px-6 text-center">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 md:w-56 md:h-56 mb-6 md:mb-8 bg-white rounded-full flex items-center justify-center p-2 shadow-2xl border-4 border-white/20">
              <img 
                src={logo} 
                alt="VIP Networks" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,0,0,0.1)]" 
              />
            </div>
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white uppercase tracking-tight relative z-10">
              Where Technology Meets <br className="hidden md:block" />
              <span className="text-white">
                Reliability
              </span>
            </h1>
            <div className="max-w-2xl mx-auto text-sm md:text-xl text-white/90 mb-8 md:mb-10 leading-relaxed drop-shadow-lg min-h-[4em] md:h-[3em]">
              <Typewriter
                options={{
                  strings: ["Empowering your business with cutting-edge security, networking, and IT infrastructure solutions tailored for the modern enterprise."],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center w-full max-w-[500px] px-4">
              <Link href="/services" className="w-full">
                <button className="w-full px-6 py-3.5 md:py-3 bg-white text-black font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all uppercase text-sm md:text-lg tracking-wider flex items-center justify-center cursor-pointer no-default-hover-elevate no-default-active-elevate whitespace-nowrap">
                  Explore Solutions
                </button>
              </Link>
              <Link href="/contact" className="w-full">
                <button className="w-full px-6 py-3.5 md:py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-all uppercase text-sm md:text-lg tracking-wider flex items-center justify-center cursor-pointer backdrop-blur-sm no-default-hover-elevate no-default-active-elevate whitespace-nowrap">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT PREVIEW */}
      <section className="py-16 md:py-24 bg-[#050a15] relative overflow-hidden">
        {/* Background Video for Section */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100"
          >
            <source src={techVideo} type="video/mp4" />
          </video>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="flex flex-col items-center text-center mb-12 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-6 md:mb-8 font-poppins text-white leading-tight uppercase tracking-tighter lg:whitespace-nowrap">
                Redefining Security & <span className="text-[#3b82f6]">Connectivity</span>
              </h2>
              <p className="text-white mb-10 md:mb-12 text-base md:text-xl max-w-6xl mx-auto leading-relaxed px-4 md:px-32">
                VIP Networks specializes in delivering top-tier IT infrastructure and security solutions. From enterprise networking to advanced surveillance, we build systems that safeguard your assets and streamline your operations.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 mb-12 md:mb-16">
                {[
                  { text: "Expert installation & maintenance", icon: Shield },
                  { text: "24/7 Technical Support", icon: Headset },
                  { text: "Customized Enterprise Solutions", icon: Lock }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/90 font-bold uppercase tracking-widest text-[10px] md:text-sm text-left md:text-center w-full md:w-auto px-4 md:px-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 shadow-[0_0_15px_rgba(59,130,246,0.2)] shrink-0">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-[#3b82f6]" />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="relative w-full">
                <div className="absolute -inset-20 bg-[#3b82f6]/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { title: "Security", img: generatedSecurity, desc: "Comprehensive protection for physical and digital assets." },
                    { title: "Network", img: generatedNetwork, desc: "High-speed infrastructure for modern business." },
                    { title: "Access", img: generatedAccess, desc: "Smart control systems for regulated entry." },
                    { title: "Power", img: generatedPower, desc: "Uninterrupted power solutions for continuity." }
                  ].map((card, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="bg-[#0d1526] rounded-3xl border border-white/5 shadow-2xl overflow-hidden group flex flex-col aspect-[3/4]"
                    >
                      <div className="h-[70%] overflow-hidden relative">
                        <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] via-transparent to-transparent opacity-40" />
                      </div>
                      <div className="h-[30%] p-5 md:p-6 flex flex-col justify-center text-left">
                        <h3 className="font-bold text-lg md:text-xl text-white font-poppins uppercase tracking-wider mb-1">{card.title}</h3>
                        <p className="text-xs md:text-sm text-white/50 leading-relaxed">{card.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <Link href="/about">
                  <span className="text-[#3b82f6] font-bold uppercase tracking-widest text-sm hover:brightness-125 cursor-pointer transition-all border-b-2 border-[#3b82f6] pb-1">
                    Read More About Us
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID - Hidden as requested
      <section className="py-24 relative overflow-hidden">
        ...
      </section>
      */}

      {/* CTA SECTION */}
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-6 font-poppins">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-[#ffffff] text-xl md:text-2xl font-semibold max-w-4xl mx-auto">
            Get in touch with our experts today for a customized quote tailored to your specific business needs.
          </p>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        {/* Background Video for Section */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={techVideo} type="video/mp4" />
          </video>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-5xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white font-poppins tracking-tight uppercase">Industries <span className="text-[#3b82f6]">We Serve</span></h2>
            <p className="text-white text-base md:text-xl">
              Tailored technology solutions for diverse sectors, driving innovation and security across industries.
            </p>
          </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { title: "Corporate Offices & Enterprises", img: imgCorporate },
              { title: "Manufacturing & Industrial Units", img: imgManufacturing },
              { title: "Healthcare & Hospitals", img: imgHealthcare },
              { title: "Education & Training Institutions", img: imgEducation },
              { title: "Retail & Commercial Spaces", img: imgRetail },
              { title: "Hotels, Hospitality & Real Estate", img: imgHospitalityNew },
              { title: "Government & Public Sector", img: imgGovernment },
              { title: "Warehousing, Logistics & Supply Chain", img: imgLogistics },
              { title: "Startups & SMEs", img: imgStartups },
              { title: "Data Centers & IT Parks", img: imgDatacenter },
            ].map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-[#0d1526] rounded-2xl border border-white/5 hover:border-[#3b82f6]/30 transition-all group overflow-hidden flex flex-col h-full shadow-lg"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={industry.img} 
                    alt={industry.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526] to-transparent opacity-60" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-sm text-white font-poppins leading-tight flex-1">{industry.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-16 md:py-24 bg-secondary/10 relative overflow-hidden">
        {/* Background Video for Section */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-105"
          >
            <source src={techVideo} type="video/mp4" />
          </video>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white font-poppins tracking-tight uppercase">Completed <span className="text-[#3b82f6]">Projects</span></h2>
            <p className="text-white text-base md:text-lg">A showcase of our successfully delivered infrastructure and security solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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

      {/* TESTIMONIALS SECTION */}
      <section className="py-24 bg-[#0a1120] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent opacity-50" />
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-poppins tracking-tight uppercase">Client <span className="text-[#3b82f6]">Testimonials</span></h2>
            <p className="text-[#ffffff] text-lg md:text-xl font-medium tracking-tight">What our partners say about our commitment to excellence.</p>
          </div>

          <div className="relative group">
            <div className="flex overflow-hidden">
              <motion.div 
                animate={{
                  x: [0, -1600],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
                className="flex gap-8 whitespace-nowrap"
              >
                {[...testimonials, ...testimonials].map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="inline-block w-[280px] sm:w-[350px] md:w-[450px] bg-[#0d1526]/80 backdrop-blur-xl p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-2xl relative group/card transition-all duration-500 hover:border-[#3b82f6]/30 hover:shadow-[#3b82f6]/10"
                  >
                    <div className="flex flex-col gap-3 md:gap-4 mb-4 md:mb-6">
                      <div>
                        <h4 className="font-bold text-white text-base md:text-lg font-poppins tracking-tight uppercase">{testimonial.name}</h4>
                        <p className="text-xs md:text-sm text-[#3b82f6] font-semibold tracking-wider uppercase">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm md:text-xl italic leading-relaxed whitespace-normal font-medium">
                      "{testimonial.content}"
                    </p>
                    <div className="mt-6 md:mt-8 flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-[#3b82f6]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#0a1120] to-transparent z-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#0a1120] to-transparent z-20 pointer-events-none" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
