import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, ArrowRight } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="w-full bg-[#292929] py-24 px-4 font-sans selection:bg-[#bf9b30] selection:text-[#292929] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#bf9b30] text-xs font-bold tracking-[0.4em] uppercase block mb-3">
            IyyanAlli Groups
          </span>
          <h2 className="text-3xl lg:text-5xl font-thin text-white tracking-wide">
            Mission & <span className="font-normal text-[#bf9b30]">Vision</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* --- MISSION CARD --- */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative bg-[#333] border border-white/5 p-10 lg:p-14 overflow-hidden rounded-sm hover:border-[#bf9b30]/30 transition-colors duration-500"
          >
            {/* Background Watermark */}
            <h3 className="absolute -bottom-4 -right-4 text-9xl font-black text-white/[0.02] tracking-tighter select-none group-hover:text-[#bf9b30]/[0.05] transition-colors duration-500">
              GOAL
            </h3>

            {/* Icon & Decor */}
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <div className="p-4 bg-[#bf9b30]/10 rounded-full text-[#bf9b30]">
                <Target size={32} strokeWidth={1.5} />
              </div>
              <div className="w-20 h-[1px] bg-gradient-to-l from-[#bf9b30] to-transparent opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-light text-white tracking-wide">Our Mission</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg text-justify">
                To empower Pondicherry's entrepreneurs and businesses by providing <span className="text-gray-200 font-normal">innovative platforms</span> for listing, promotion, and monetization. We are bridging traditional industries like real estate and manufacturing with digital opportunities, so every idea can <span className="text-[#bf9b30]">thrive without barriers</span>.
              </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 left-0 w-1 h-0 bg-[#bf9b30] group-hover:h-full transition-all duration-700 ease-in-out"></div>
          </motion.div>

          {/* --- VISION CARD --- */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[#333] border border-white/5 p-10 lg:p-14 overflow-hidden rounded-sm hover:border-[#bf9b30]/30 transition-colors duration-500"
          >
            {/* Background Watermark */}
            <h3 className="absolute -bottom-4 -right-4 text-9xl font-black text-white/[0.02] tracking-tighter select-none group-hover:text-[#bf9b30]/[0.05] transition-colors duration-500">
              FUTURE
            </h3>

            {/* Icon & Decor */}
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <div className="p-4 bg-[#bf9b30]/10 rounded-full text-[#bf9b30]">
                <Compass size={32} strokeWidth={1.5} />
              </div>
              <div className="w-20 h-[1px] bg-gradient-to-l from-[#bf9b30] to-transparent opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl font-light text-white tracking-wide">Our Vision</h3>
              <p className="text-gray-400 font-light leading-relaxed text-lg text-justify">
                To become Pondicherry's leading <span className="text-gray-200 font-normal">integrated business ecosystem</span>, where Iyyanalli Groups inspires a new generation of success stories: scaling from humble beginnings to multimillion ventures, fostering economic growth, and honoring legacies through <span className="text-[#bf9b30]">relentless innovation</span>.
              </p>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-1 h-0 bg-[#bf9b30] group-hover:h-full transition-all duration-700 ease-in-out"></div>
          </motion.div>

        </div>
        
        {/* Decorative Center Connector (Visual Only) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-12"
        >
           <div className="flex items-center gap-4 text-white/20">
              <div className="w-12 h-[1px] bg-white/20"></div>
              <div className="w-2 h-2 rounded-full bg-[#bf9b30]"></div>
              <div className="w-12 h-[1px] bg-white/20"></div>
           </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MissionVision;