import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, ArrowUpRight } from 'lucide-react';
// Make sure this path matches your actual project structure
import Logo from "@/assets/img/logo.png"; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Founder', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Brands', href: '#brands' },
  ];

  return (
    <footer className="bg-[#222] border-t border-white/10 pt-20 pb-10 px-4 font-sans selection:bg-[#bf9b30] selection:text-[#292929]">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* --- COLUMN 1: LOGO & BRANDING --- */}
          <div className="space-y-6">
            {/* Logo Image */}
            <div className="flex flex-col items-start gap-2">
              <img 
                src={Logo} 
                alt="IyyanAlli Groups Logo" 
                className="h-16 w-auto object-contain mb-2" 
              />
              {/* Fixed: Lightened text color */}
              </div>
            
            {/* Fixed: Lightened text color for better readability */}
            <p className="text-gray-300 text-sm leading-relaxed font-light max-w-sm text-justify">
              Bridging traditional industries with digital opportunities. We empower entrepreneurs and foster economic growth through our integrated business ecosystem.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#bf9b30] hover:border-[#bf9b30] transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* --- COLUMN 2: QUICK LINKS (Centered in layout) --- */}
          <div className="lg:pl-12">
            <h3 className="text-white font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#bf9b30]"></span> Quick Links
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  {/* Fixed: Lightened text color */}
                  <a href={link.href} className="text-gray-300 text-sm font-light hover:text-[#bf9b30] hover:translate-x-2 transition-all duration-300 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* --- COLUMN 3: CONTACT INFO --- */}
          <div>
            <h3 className="text-white font-medium mb-6 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#bf9b30]"></span> Contact Us
            </h3>
            <div className="space-y-6">
              
              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone size={18} className="text-[#bf9b30] mt-1 shrink-0" />
                <div>
                  {/* Fixed: Lightened label color */}
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Call Us Directly</p>
                  <a href="tel:9944355114" className="block text-gray-200 hover:text-[#bf9b30] transition-colors text-sm">9944355114</a>
                  <a href="tel:8667233235" className="block text-gray-200 hover:text-[#bf9b30] transition-colors text-sm">8667233235</a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail size={18} className="text-[#bf9b30] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Email Inquiries</p>
                  <a href="mailto:nandha@huntsworld.com" className="block text-gray-200 hover:text-[#bf9b30] transition-colors text-sm">nandha@huntsworld.com</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={18} className="text-[#bf9b30] mt-1 shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Headquarters</p>
                  <p className="text-gray-200 text-sm">Pondicherry, India</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Fixed: Lightened copyright text */}
          <p className="text-gray-400 text-xs font-light tracking-wide text-center md:text-left">
            &copy; {currentYear} IyyanAlli Groups. All rights reserved.
          </p>
          
          {/* Developer Credit */}
          <div className="flex items-center gap-1 text-xs text-gray-500">
            <span>Developed by</span>
            <a 
              href="https://bmtechx.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-[#bf9b30] flex items-center gap-0.5 transition-colors font-medium group"
            >
              BMTechx.in
              <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;