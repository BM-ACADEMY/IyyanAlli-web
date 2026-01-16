import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Import your video file
import Founder from "@/assets/img/banner.mp4"; 

// --- Configuration Data (Content Only) ---
const SLIDES = [
  {
    id: 1,
    title: "Experience the Future",
    subtitle: "Innovation begins here",
    description: "Discover a new era of automotive excellence with our latest concept designs tailored for the modern world.",
  },
  {
    id: 2,
    title: "Urban Elegance",
    subtitle: "Style meets substance",
    description: "Navigate the city streets with unparalleled grace and a design that turns heads wherever you go.",
  },
  {
    id: 3,
    title: "Boundless Freedom",
    subtitle: "Adventure awaits",
    description: "Break free from the ordinary and explore the unknown with performance that knows no limits.",
  },
];

// --- Animation Variants for Text ---
const contentVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" } 
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { duration: 0.5, ease: "easeIn" } 
  }
};

const HomePage = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // Handle circular index logic
  const slideIndex = Math.abs(page % SLIDES.length);
  const currentSlide = SLIDES[slideIndex];

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // Auto-play logic (Rotates text every 8 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 8000); 
    return () => clearInterval(timer);
  }, [page]);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black" id="home">
      
      {/* --- 1. Static Background Video Layer --- */}
      <div className="absolute inset-0 z-0">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        {/* Single Persistent Video */}
        <video
          src={Founder}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* --- 2. Content Overlay Layer --- */}
      <div className="absolute inset-0 z-20 flex items-center justify-start px-8 md:px-20">
        <AnimatePresence mode="wait">
          {/* <motion.div
            key={page} // Changes based on page state
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="max-w-2xl text-white"
          >
            <motion.span 
              className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs uppercase tracking-widest mb-4 backdrop-blur-md"
            >
              {currentSlide.subtitle}
            </motion.span>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              {currentSlide.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
              {currentSlide.description}
            </p>
            
            <button className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all duration-300">
              Explore Model
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div> */}
        </AnimatePresence>
      </div>

      {/* --- 3. Navigation Controls --- */}
      {/* <div className="absolute bottom-10 left-0 w-full z-30 px-8 md:px-20 flex justify-between items-end">
        <div className="flex gap-4">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                const diff = idx - slideIndex;
                setPage([page + diff, diff]);
              }}
              className={`h-1 transition-all duration-500 rounded-full ${
                idx === slideIndex ? "w-16 bg-white" : "w-8 bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white hover:text-black transition duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md hover:bg-white hover:text-black transition duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;