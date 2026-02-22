import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Award, CheckCircle2, Rocket, Network, ShieldAlert, Flame, Fingerprint, MessageSquare, Cloud, Lightbulb, HeartHandshake, UserCheck, Briefcase, Search, MapPin, PenTool, Settings, TestTube, Wrench, Handshake } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useRef } from "react";
import logo from "@assets/Untitled_design_1768974869981.png";
import expertiseImg from "@assets/image_1771750107497.png";
import sectionVideo from "@assets/From_KlickPin_CF_hologram___Black_wallpaper_iphone_dark_Graphi_1769410187226.mp4";
import worldMapVideo from "@assets/Untitled_design_1769405654510.mp4";
import networkingVideo from "@assets/From_KlickPin_CF_Pin_su_zenziads_1769407670142.mp4";
import workApproachVideo from "@assets/From_KlickPin_CF_Pin_on_Application_design_1769408986210.mp4";
import whyDifferentVideo from "@assets/From_KlickPin_CF_Pinterest___Decoraciones_fotograficas_Decorac_1769409733359.mp4";
import hologramVideo from "@assets/From_KlickPin_CF_hologram___Black_wallpaper_iphone_dark_Graphi_1769410187226.mp4";
import networkImg from "@assets/stock_images/technology_networkin_80809026.jpg";
import teamImg from "@assets/stock_images/professional_team_wo_80221bd7.jpg";
import datacenterImg from "@assets/stock_images/data_center_server_r_ac3b04d4.jpg";

function Counter({ value, duration = 2 }: { value: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = target;
    const totalMiliseconds = duration * 1000;
    const increment = end / (totalMiliseconds / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function About() {
  const stats = [
    { label: "Years Experience", value: "10+", icon: Award },
    { label: "Projects Delivered", value: "500+", icon: Rocket },
    { label: "Technology Partners", value: "20+", icon: Network },
    { label: "Client Relationships", value: "100%", icon: HeartHandshake },
  ];


  const approachItems = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We begin by understanding your business needs, operational challenges, and technical requirements to recommend the most suitable solution.",
      icon: Search
    },
    {
      step: "02",
      title: "Site Survey & Assessment",
      description: "Our technical team conducts a detailed site survey to evaluate infrastructure, layout, and network readiness for accurate planning.",
      icon: MapPin
    },
    {
      step: "03",
      title: "Solution Design",
      description: "We design a customized solution architecture using enterprise-grade technologies focusing on performance, security, and scalability.",
      icon: PenTool
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "Our engineers execute the deployment with precision, followed by reliable technical support and proactive maintenance.",
      icon: Settings
    }
  ];

  return (
    <div className="min-h-screen bg-[#050a15] text-white overflow-x-hidden">
      <Navbar />

      {/* 1. About Header */}
      <section className="relative pt-32 md:pt-52 pb-16 md:pb-32 overflow-hidden min-h-[50vh] md:min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#050a15]/60 z-10" />
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
            src={hologramVideo}
          />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-20 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl md:text-7xl font-bold uppercase mb-4 md:mb-6 text-white tracking-tighter">
              About <span className="text-white">VIP Networks</span>
            </h1>
            <p className="text-base md:text-2xl max-w-3xl mx-auto font-medium drop-shadow-lg opacity-90">
              Empowering enterprises with cutting-edge infrastructure and security solutions designed for the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Company Overview */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Background Video for Section */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover scale-100"
          >
            <source src={sectionVideo} type="video/mp4" />
          </video>
        </div>
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                <div className="space-y-3 md:space-y-4">
                  <h2 className="text-2xl md:text-5xl font-bold uppercase tracking-tighter leading-tight">
                    Driving Innovation in <span className="text-[#3b82f6]">Infrastructure</span>
                  </h2>
                </div>

                <div className="space-y-4 md:space-y-6">
                  <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-light italic border-l-4 border-[#3b82f6]/30 pl-4 md:pl-6">
                    VIP Networks is a technology-driven IT and infrastructure solutions company delivering reliable, secure, and scalable systems for businesses across industries.
                  </p>
                  <p className="text-sm md:text-lg text-white/70 leading-relaxed">
                    We specialize in networking, surveillance, security, automation, and digital transformation solutions designed to improve operational efficiency and safety. With a focus on innovation and performance, we help organizations build future-ready technology environments that support growth and continuity.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4">
                  <div className="bg-[#0d1526] border border-white/5 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3 shadow-xl">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#3b82f6]" />
                    <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/80">Reliable Systems</span>
                  </div>
                  <div className="bg-[#0d1526] border border-white/5 rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 flex items-center gap-2 md:gap-3 shadow-xl">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#3b82f6]" />
                    <span className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-white/80">Scalable Solutions</span>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover="hover"
                className="relative rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group cursor-pointer max-w-sm mx-auto w-full"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
                  src={networkingVideo}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why We Are Different? (Enhanced Layout) */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-[#050a15] via-[#0a1120] to-[#050a15] relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#3b82f6]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 mb-4 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20"
            >
              <span className="text-[#3b82f6] text-xs font-bold uppercase tracking-[0.2em]">Our Advantage</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 uppercase tracking-tighter font-poppins">
              Why We Are <span className="text-[#3b82f6]">Different?</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto text-base md:text-lg px-4">
              We combine technical excellence with a deep commitment to our clients' long-term success.
            </p>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 items-center">
              {/* Left Column - 3 Cards */}
              <div className="flex flex-col gap-4 md:gap-6">
                {[
                  { 
                    title: "Client-focused solution design", 
                    desc: "We don't believe in one-size-fits-all. Every solution is tailored to your specific operational needs.",
                    icon: UserCheck, 
                    step: "01" 
                  },
                  { 
                    title: "Enterprise-grade technologies", 
                    desc: "We partner with global leaders to bring you the most reliable and advanced hardware and software.",
                    icon: ShieldAlert, 
                    step: "02" 
                  },
                  { 
                    title: "Skilled and certified professionals", 
                    desc: "Our team undergoes rigorous training and certification to ensure flawless implementation.",
                    icon: Award, 
                    step: "03" 
                  }
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: -5 }}
                    className="group relative bg-[#0d1526]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-2xl hover:border-[#3b82f6]/30 transition-all"
                  >
                    <div className="absolute top-6 right-6 text-3xl font-black text-white/5 group-hover:text-[#3b82f6]/10 transition-colors">
                      {point.step}
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 group-hover:bg-[#3b82f6] group-hover:scale-110 transition-all duration-300">
                        <point.icon className="w-6 h-6 text-[#3b82f6] group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors uppercase tracking-tight leading-tight">
                          {point.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Center Column - Portrait Video */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group mx-auto"
              >
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-64 md:w-72 aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-700"
                  src={whyDifferentVideo}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a15]/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Right Column - 3 Cards */}
              <div className="flex flex-col gap-4 md:gap-6">
                {[
                  { 
                    title: "Strong after-sales and AMC support", 
                    desc: "Our relationship doesn't end at deployment. We provide 24/7 support and proactive maintenance.",
                    icon: HeartHandshake, 
                    step: "04" 
                  },
                  { 
                    title: "Commitment to reliability and performance", 
                    desc: "Every system we build is stress-tested to guarantee maximum uptime and peak performance.",
                    icon: Target, 
                    step: "05" 
                  },
                  { 
                    title: "Future-Ready Infrastructure", 
                    desc: "We design systems that grow with your business, ensuring your investment is protected for years.",
                    icon: Rocket, 
                    step: "06" 
                  }
                ].map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="group relative bg-[#0d1526]/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-2xl hover:border-[#3b82f6]/30 transition-all"
                  >
                    <div className="absolute top-6 right-6 text-3xl font-black text-white/5 group-hover:text-[#3b82f6]/10 transition-colors">
                      {point.step}
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 shrink-0 rounded-xl bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 group-hover:bg-[#3b82f6] group-hover:scale-110 transition-all duration-300">
                        <point.icon className="w-6 h-6 text-[#3b82f6] group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors uppercase tracking-tight leading-tight">
                          {point.title}
                        </h3>
                        <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/70 transition-colors">
                          {point.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision (Redesigned) */}
      <section className="py-12 md:py-16 bg-[#050a15] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-8 max-w-7xl mx-auto items-center">
            {/* Left Side - 2 Cards */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Mission Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-[#0d1526] border border-white/5 shadow-2xl transition-all hover:border-[#3b82f6]/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 group-hover:bg-[#3b82f6] transition-all duration-300">
                    <Target className="w-6 h-6 text-[#3b82f6] group-hover:text-white" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-[#3b82f6] transition-colors">Mission</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  To deliver dependable, innovative, and secure technology solutions that empower businesses to operate efficiently and confidently.
                </p>
                <div className="absolute top-4 right-4 text-xs font-black text-white/5 group-hover:text-[#3b82f6]/10 transition-colors uppercase">
                  01
                </div>
              </motion.div>

              {/* Values Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-[#0d1526] border border-white/5 shadow-2xl transition-all hover:border-[#3b82f6]/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 group-hover:bg-[#3b82f6] transition-all duration-300">
                    <Award className="w-6 h-6 text-[#3b82f6] group-hover:text-white" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-[#3b82f6] transition-colors">Values</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  Integrity, excellence, and commitment to delivering solutions that exceed expectations while building lasting partnerships.
                </p>
                <div className="absolute top-4 right-4 text-xs font-black text-white/5 group-hover:text-[#3b82f6]/10 transition-colors uppercase">
                  03
                </div>
              </motion.div>
            </div>

            {/* Middle Side - Portrait Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group mx-auto order-last lg:order-none"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-64 md:w-72 aspect-[9/16] object-cover group-hover:scale-105 transition-transform duration-700"
                src={hologramVideo}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a15]/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Side - 2 Cards */}
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Vision Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-[#0d1526] border border-white/5 shadow-2xl transition-all hover:border-[#3b82f6]/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 group-hover:bg-[#3b82f6] transition-all duration-300">
                    <Lightbulb className="w-6 h-6 text-[#3b82f6] group-hover:text-white" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-[#3b82f6] transition-colors">Vision</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  To be a trusted technology partner recognized for quality, innovation, and long-term customer relationships.
                </p>
                <div className="absolute top-4 right-4 text-xs font-black text-white/5 group-hover:text-[#3b82f6]/10 transition-colors uppercase">
                  02
                </div>
              </motion.div>

              {/* Promise Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-[#0d1526] border border-white/5 shadow-2xl transition-all hover:border-[#3b82f6]/30"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#3b82f6]/10 flex items-center justify-center border border-[#3b82f6]/20 group-hover:bg-[#3b82f6] transition-all duration-300">
                    <HeartHandshake className="w-6 h-6 text-[#3b82f6] group-hover:text-white" />
                  </div>
                  <h2 className="text-xl font-bold uppercase tracking-widest text-white group-hover:text-[#3b82f6] transition-colors">Promise</h2>
                </div>
                <p className="text-white/60 text-sm leading-relaxed font-medium">
                  We promise unwavering support, transparent communication, and solutions that grow alongside your business needs.
                </p>
                <div className="absolute top-4 right-4 text-xs font-black text-white/5 group-hover:text-[#3b82f6]/10 transition-colors uppercase">
                  04
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Trust & Credibility (Stats) */}
      <section className="py-12 md:py-16 bg-[#0d1526]/50 border-y border-white/5">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-[#3b82f6]/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-[#3b82f6]/20">
                  <stat.icon className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 font-poppins tracking-tighter">
                  <Counter value={stat.value} />
                </div>
                <div className="text-white/40 uppercase tracking-widest text-xs font-bold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          {/* Our Work Approach Section (Redesigned) */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-[#050a15] to-[#0d1526]">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-1/3 -left-20 w-80 h-80 bg-[#3b82f6]/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-[#60a5fa]/10 rounded-full blur-[100px]" />
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="text-center mb-10 md:mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 uppercase tracking-tight font-poppins">
                Our Work <span className="text-[#3b82f6]">Approach</span>
              </h2>
              <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-3xl mx-auto italic px-4">
                Smart Planning. Seamless Execution. Reliable Support.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Video Column (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl group bg-[#0d1526]"
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                controls={false}
                preload="auto"
                className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src={workApproachVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a15]/40 to-transparent pointer-events-none" />
            </motion.div>

            {/* Content Column (Right) */}
            <div className="space-y-4 md:space-y-6">
              {approachItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group relative bg-[#0d1526]/80 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-[#3b82f6]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] flex items-start gap-6"
                >
                  {/* Step Number Badge */}
                  <div className="shrink-0 w-12 h-12 bg-[#3b82f6]/10 rounded-xl border border-[#3b82f6]/30 flex items-center justify-center group-hover:bg-[#3b82f6] transition-all duration-300">
                    <span className="text-[#3b82f6] group-hover:text-white font-bold text-lg">{item.step}</span>
                  </div>

                  {/* Content */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#3b82f6] transition-colors uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Hover Icon Reveal */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                    <item.icon className="w-12 h-12 text-[#3b82f6]" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-14 max-w-4xl mx-auto"
          >
            <div className="relative bg-gradient-to-r from-[#3b82f6]/10 to-[#60a5fa]/10 rounded-2xl border border-[#3b82f6]/30 p-6 md:p-8 text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#050a15] rounded-full border-2 border-[#3b82f6] flex items-center justify-center shadow-lg shadow-[#3b82f6]/30">
                  <Handshake className="w-6 h-6 md:w-8 md:h-8 text-[#3b82f6]" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mt-4 mb-3 md:mb-4 uppercase tracking-tight">
                Our <span className="text-[#3b82f6]">Commitment</span>
              </h3>
              <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed">
                We believe in building long-term partnerships by delivering quality solutions, responsive support, and consistent performance. Every project is handled with accountability, professionalism, and attention to detail.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="py-10 md:py-14 bg-[#3b82f6] relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto text-center md:text-left">
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white uppercase tracking-tighter leading-tight font-poppins">
                Ready to Collaborate with us?
              </h2>
              <p className="text-white/80 text-base md:text-lg lg:text-xl font-medium">
                Let VIP Networks design the right solution for your business.
              </p>
            </div>
            <div className="shrink-0">
              <Link href="/contact">
                <button className="px-10 py-4 bg-white text-[#3b82f6] hover:bg-black hover:text-white font-bold rounded-full shadow-xl transition-all uppercase tracking-widest text-base font-poppins cursor-pointer">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
