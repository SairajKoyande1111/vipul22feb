import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactMessageInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, Instagram, Facebook, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { z } from "zod";
import worldMapVideo from "@assets/Untitled_design_1769405654510.mp4";
import radarGif from "@assets/CCTV_Camera_1768636156008.gif";
import workApproachVideo from "@assets/From_KlickPin_CF_Pin_on_Application_design_1769408986210.mp4";
import contactHeroVideo from "@/assets/videos/contact-hero.mp4";
import contactDetailsVideo from "@/assets/videos/contact-details.mp4";

// Frontend validation schema
const contactSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .regex(/^[A-Za-z\s]+$/, "Name can only contain letters"),
  phone: z.string()
    .length(10, "Phone must be 10 digits")
    .regex(/^\d+$/, "Phone must be numbers only"),
  email: z.string().email("Please enter a valid email address"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isDirty }, reset, watch, setValue } = useForm<ContactMessageInput>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      service: ""
    }
  });

  const { mutate, isPending } = useSubmitContact();

  const onSubmit = (data: ContactMessageInput) => {
    mutate(data, {
      onSuccess: () => reset(),
    });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:text-[#1877F2]" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-[#1DA1F2]" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:text-[#E4405F]" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:text-[#0A66C2]" },
    { icon: MessageSquare, href: "#", label: "WhatsApp", color: "hover:text-[#25D366]" },
  ];

  const servicesList = [
    "CCTV Surveillance",
    "Fire Detection",
    "Access Control",
    "Networking",
    "Public Address",
    "Audio Visual",
    "Other Infrastructure"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Navbar />

      {/* Header Section with Animated Background */}
      <div className="pt-32 md:pt-52 pb-16 md:pb-32 bg-secondary relative overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center">
        {/* Horizontal Full Heading Cover Animation */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src={contactHeroVideo}
          />
        </div>
        
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-white uppercase tracking-tighter"
          >
            Get In <span className="text-white">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-2xl font-medium max-w-3xl mx-auto drop-shadow-lg opacity-90"
          >
            Have a project in mind? Contact us for a consultation or quote. Our team is ready to assist you.
          </motion.p>
        </div>
      </div>

      <div className="py-16 md:py-24 container px-4 md:px-6 mx-auto relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src={contactDetailsVideo}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 relative z-10">
          {/* Contact Info */}
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              <h3 className="text-2xl md:text-4xl font-bold text-white uppercase tracking-tight">Contact <span className="text-[#3b82f6]">Information</span></h3>
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 transition-colors">
                    <MapPin className="w-6 h-6 md:w-7 md:h-7 text-[#3b82f6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-white mb-1 md:mb-2 uppercase tracking-wide">Our Office</h4>
                    <p className="text-white/60 leading-relaxed text-sm md:text-lg">
                      Shop No. 5, Ground Floor,<br />
                      Jogeshwari East,<br />
                      Mumbai - 400060
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 transition-colors">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-[#3b82f6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-white mb-1 md:mb-2 uppercase tracking-wide">Phone</h4>
                    <p className="text-white/60 text-sm md:text-lg mb-1">+91 9326144739</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center shrink-0 border border-[#3b82f6]/20 group-hover:bg-[#3b82f6]/20 transition-colors">
                    <Mail className="w-6 h-6 md:w-7 md:h-7 text-[#3b82f6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg md:text-xl text-white mb-1 md:mb-2 uppercase tracking-wide">Email</h4>
                    <a href="mailto:vip.itinfra@gmail.com" className="text-white/60 text-sm md:text-lg hover:text-[#3b82f6] transition-colors block">
                      vip.itinfra@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4 md:pt-8">
              <h4 className="text-[10px] md:text-sm font-bold text-white/40 uppercase tracking-[0.3em] mb-4 md:mb-6">Follow Our Journey</h4>
              <div className="flex gap-3 md:gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href}
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all hover:scale-110 hover:border-[#3b82f6]/30 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative group pt-2 md:pt-4">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#3b82f6]/20 to-transparent blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black rounded-[1.5rem] md:rounded-[2rem] h-64 md:h-80 border border-white/10 overflow-hidden shadow-2xl">
                 <iframe 
                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3491953255154!2d72.85507797497886!3d19.136166450085465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7d5904d9943%3A0xc619f5e3e6012015!2sJogeshwari%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1709289299999!5m2!1sen!2sin" 
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0d1526]/80 backdrop-blur-2xl rounded-[2rem] md:rounded-[3rem] p-6 md:p-10 lg:p-14 border border-white/5 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6]/5 blur-[100px] -z-10 rounded-full" />
            
            <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 text-white uppercase tracking-tight">Send us a <span className="text-[#3b82f6]">Message</span></h3>
            <p className="text-white/50 mb-8 md:mb-12 text-sm md:text-lg">Fill out the form below and our specialized team will get back to you shortly.</p>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    {...register("name")}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/[^A-Za-z\s]/g, "");
                    }}
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:outline-none focus:border-[#3b82f6]/50 focus:ring-4 focus:ring-[#3b82f6]/10 transition-all placeholder:text-white/20 text-white text-sm md:text-base"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">{errors.name.message}</p>}
                </div>

                <div className="space-y-2 md:space-y-3">
                  <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Phone Number</label>
                  <input 
                    {...register("phone")}
                    maxLength={10}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      input.value = input.value.replace(/[^0-9]/g, "").slice(0, 10);
                    }}
                    placeholder="9876543210"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:outline-none focus:border-[#3b82f6]/50 focus:ring-4 focus:ring-[#3b82f6]/10 transition-all placeholder:text-white/20 text-white text-sm md:text-base"
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:outline-none focus:border-[#3b82f6]/50 focus:ring-4 focus:ring-[#3b82f6]/10 transition-all placeholder:text-white/20 text-white text-sm md:text-base"
                />
                {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">{errors.email.message}</p>}
              </div>

              <div className="space-y-2 md:space-y-3 hidden">
                <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Service Required</label>
                <div className="relative">
                  <select 
                    {...register("service")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:outline-none focus:border-[#3b82f6]/50 focus:ring-4 focus:ring-[#3b82f6]/10 transition-all text-white/80 appearance-none cursor-pointer text-sm md:text-base"
                  >
                    <option value="" disabled className="bg-[#0d1526]">Select a service</option>
                    {servicesList.map((service) => (
                      <option key={service} value={service} className="bg-[#0d1526]">
                        {service}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                  </div>
                </div>
                {errors.service && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-1">{errors.service.message}</p>}
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest ml-1">Message (Optional)</label>
                <textarea 
                  {...register("message")}
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl px-5 md:px-6 py-3.5 md:py-4 focus:outline-none focus:border-[#3b82f6]/50 focus:ring-4 focus:ring-[#3b82f6]/10 transition-all placeholder:text-white/20 text-white resize-none text-sm md:text-base"
                />
              </div>

              <button 
                type="submit" 
                disabled={isPending}
                className="w-full py-4 md:py-5 bg-[#3b82f6] text-white font-bold rounded-xl md:rounded-2xl shadow-2xl shadow-[#3b82f6]/20 hover:shadow-[#3b82f6]/40 hover:-translate-y-1 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase tracking-[0.2em] flex items-center justify-center gap-2 md:gap-3 cursor-pointer group text-sm md:text-base"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 md:w-6 md:h-6 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
