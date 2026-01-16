import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/assets/img/logo.png"; // Ensure this path is correct in your project

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#323232] backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* --- Left Side: Image Logo --- */}
          <a href="#" className="flex items-center gap-3 cursor-pointer group">
            <motion.img
              src={Logo}
              alt="Logo"
              // Adjusted size: h-10 (40px) is standard for navbars
              className="h-14 w-auto object-contain" 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            <span className="text-[#eb1c2e] font-bold text-xl tracking-tighter group-hover:text-gray-300 transition-colors">
              IyyanAlli Groups
            </span>
          </a>

          {/* --- Right Side: Desktop Nav --- */}
          <div className="hidden md:flex items-center gap-8">
            <FlipLink href="#home">Home</FlipLink>
            <FlipLink href="#founder">Founder</FlipLink>
            <FlipLink href="#about">About</FlipLink>
            <FlipLink href="#brands">Brands</FlipLink>
            <FlipLink href="#contact">Contact</FlipLink>
          </div>

          {/* --- Mobile Menu Button --- */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {/* --- Mobile Off-Canvas Menu --- */}
      <AnimatePresence>
        {isMobileOpen && (
          <MobileMenu onClose={() => setIsMobileOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

// --- 3D Flip Link Animation ---
const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-gray-300 font-medium"
    >
      <div className="relative">
        {/* Original Text - Slides Up */}
        <motion.span
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%" },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="inline-block"
        >
          {children}
        </motion.span>
        
        {/* Colored Text - Slides In from Bottom */}
        <motion.span
          variants={{
            initial: { y: "100%" },
            hovered: { y: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="absolute left-0 top-0 inline-block text-[#f7ce56] font-bold"
        >
          {children}
        </motion.span>
      </div>
    </motion.a>
  );
};

// --- Mobile: Off-Canvas Menu ---
const MobileMenu = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden flex justify-end"
    >
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="w-3/4 max-w-sm h-full bg-zinc-900 border-l border-white/10 p-6 flex flex-col"
      >
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            {/* You can also put the logo here in the mobile menu if desired */}
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-white font-bold text-md">IyyanAlli Groups</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-lg">
          
          <MobileLink href="#home">Home</MobileLink>
            <MobileLink href="#founder">Founder</MobileLink>
            <MobileLink href="#about">About</MobileLink>
            <MobileLink href="#brands">Brands</MobileLink>
            <MobileLink href="#contact">Contact</MobileLink>
        </div>

        {/* <div className="mt-auto">
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 active:scale-95 transition-transform">
            Sign In <ArrowRight size={18} />
          </button>
        </div> */}
      </motion.div>
    </motion.div>
  );
};

const MobileLink = ({ children, href }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white font-medium transition-colors hover:translate-x-2 block duration-300"
  >
    {children}
  </a>
);

export default Navbar;