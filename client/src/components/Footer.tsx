import { Link } from "wouter";
import logo from "@assets/Untitled_design_1768974869981.png";
import facebookIcon from "@assets/facebook_1769417989730.png";
import whatsappIcon from "@assets/logo_1769417985585.png";
import linkedinIcon from "@assets/linkedin_1769417993177.png";
import instagramIcon from "@assets/instagram_1769417996612.png";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = () => {
    setError("");
    setSuccess(false);

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    
    setSuccess(true);
    setEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  const socialLinks = [
    { icon: facebookIcon, alt: "Facebook", href: "#" },
    { icon: whatsappIcon, alt: "WhatsApp", href: "#" },
    { icon: linkedinIcon, alt: "LinkedIn", href: "#" },
    { icon: instagramIcon, alt: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-[#050a15] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Brand */}
          <div className="space-y-6 lg:col-span-4">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 shadow-xl border-2 border-white/20">
                <img src={logo} alt="VIP Networks" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-none">VIP NETWORKS</h3>
                <p className="text-[#3b82f6] text-[11px] tracking-[0.2em] uppercase mt-1 font-bold">VISIONARY | INNOVATIVE | PRODUCTIVITY</p>
              </div>
            </div>
            <p className="text-white/50 text-base leading-relaxed max-w-sm">
              Leading provider of comprehensive IT infrastructure, security systems, and networking solutions for modern enterprises.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon, alt, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-black/20"
                  data-testid={`link-social-${alt.toLowerCase()}`}
                >
                  <img src={icon} alt={alt} className="w-full h-full object-cover" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 hidden">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-white/80 hover:text-[#3b82f6] transition-colors cursor-pointer flex items-center text-[16px]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-[16px]">
                <MapPin className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                <span>Jogeshwari East,<br />Mumbai - 400060</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[16px]">
                <Phone className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="tel:+919326144739" className="hover:text-white transition-colors">+91 9326144739</a>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-[16px]">
                <Mail className="w-5 h-5 text-[#3b82f6] shrink-0" />
                <a href="mailto:vip.itinfra@gmail.com" className="hover:text-white transition-colors">vip.itinfra@gmail.com</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Subscribe */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-[15px]">Subscribe</h4>
            <p className="text-white/50 text-[15px] mb-6 leading-relaxed">
              Stay updated with our latest technology solutions and industry insights.
            </p>
            <div className="space-y-2">
              <div className="relative max-w-md">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address" 
                  className={`w-full bg-white/5 border rounded-xl py-3 px-4 pr-12 text-sm text-white focus:outline-none transition-all ${error ? 'border-red-500' : 'border-white/10 focus:border-[#3b82f6]/50'}`}
                  data-testid="input-email-subscribe"
                />
                <button 
                  onClick={handleSubscribe}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-[#3b82f6] text-white flex items-center justify-center hover:bg-[#2563eb] transition-colors shadow-lg shadow-[#3b82f6]/20"
                  data-testid="button-subscribe"
                >
                  <Send size={14} />
                </button>
              </div>
              {error && <p className="text-red-500 text-xs mt-1 animate-in fade-in slide-in-from-top-1">{error}</p>}
              {success && <p className="text-green-500 text-xs mt-1 animate-in fade-in slide-in-from-top-1">Successfully subscribed!</p>}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] text-white/40">
          <p>© {new Date().getFullYear()} VIP Networks. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy">
              <span className="hover:text-white transition-colors cursor-pointer" data-testid="link-privacy">Privacy Policy</span>
            </Link>
            <Link href="/terms">
              <span className="hover:text-white transition-colors cursor-pointer" data-testid="link-terms">Terms of Service</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
