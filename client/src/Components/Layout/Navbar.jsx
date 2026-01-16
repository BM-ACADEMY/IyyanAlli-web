import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "@/assets/img/logo.png"; // Ensure this path is correct

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
              className="h-14 w-auto object-contain"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            />
            <span className="text-[#bf9b30] font-bold text-xl tracking-tighter group-hover:text-gray-300 transition-colors">
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

// --- 3D Flip Link Animation (Fixed) ---
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
          className="block" // Changed to block for better height calculation
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
          // Added w-full to ensure it matches parent width exactly
          className="absolute left-0 top-0 block w-full text-[#f7ce56] font-bold"
        >
          {children}
        </motion.span>
      </div>
    </motion.a>
  );
};

// --- Mobile: Off-Canvas Menu (Fixed Closing) ---
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
            <img src={Logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-white font-bold text-md">IyyanAlli Groups</span>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-lg">
          {/* Passed onClose to every link */}
          <MobileLink href="#home" onClick={onClose}>Home</MobileLink>
          <MobileLink href="#founder" onClick={onClose}>Founder</MobileLink>
          <MobileLink href="#about" onClick={onClose}>About</MobileLink>
          <MobileLink href="#brands" onClick={onClose}>Brands</MobileLink>
          <MobileLink href="#contact" onClick={onClose}>Contact</MobileLink>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Updated MobileLink to accept onClick
const MobileLink = ({ children, href, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-gray-400 hover:text-white font-medium transition-colors hover:translate-x-2 block duration-300"
  >
    {children}
  </a>
);

export default Navbar;