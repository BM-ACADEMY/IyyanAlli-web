import React from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Trophy, TrendingUp, Building2, Users, Star, ArrowUpRight } from 'lucide-react';

// --- ANIMATED COUNTER COMPONENT ---
const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { duration: 2000, bounce: 0 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const SuccessStories = () => {
  return (
    <section className="min-h-screen bg-[#292929] py-24 px-4 font-sans selection:bg-[#bf9b30] selection:text-[#292929]">
      <div className="max-w-6xl mx-auto">

        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
             {/* <Star className="text-[#bf9b30] fill-[#bf9b30]" size={16} /> */}
             <span className="text-[#bf9b30] text-xs font-bold tracking-[0.3em] uppercase">Milestones</span>
             {/* <Star className="text-[#bf9b30] fill-[#bf9b30]" size={16} /> */}
          </div>
          <h2 className="text-4xl lg:text-5xl font-thin text-white tracking-wide">
            Legacy of <span className="text-[#bf9b30] font-normal">Success</span>
          </h2>
        </motion.div>

        {/* --- BENTO GRID LAYOUT --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {/* 1. KEY STAT: YEARS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 bg-[#333] border border-white/5 p-8 rounded-sm flex flex-col justify-between hover:border-[#bf9b30]/30 transition-colors group"
          >
            <div className="p-3 bg-[#bf9b30]/10 w-fit rounded-md text-[#bf9b30] mb-4">
              <Trophy size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-4xl font-light text-white mb-1">
                <Counter value={25} suffix="+" />
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Years of Legacy</p>
            </div>
          </motion.div>

          {/* 2. KEY STAT: PROJECTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="col-span-1 bg-[#333] border border-white/5 p-8 rounded-sm flex flex-col justify-between hover:border-[#bf9b30]/30 transition-colors group"
          >
            <div className="p-3 bg-[#bf9b30]/10 w-fit rounded-md text-[#bf9b30] mb-4">
              <Building2 size={24} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-4xl font-light text-white mb-1">
                <Counter value={21} suffix="+" />
              </h3>
              <p className="text-sm text-gray-400 uppercase tracking-widest">Completed Projects</p>
            </div>
          </motion.div>

          {/* 3. HERO STORY: ARASI GROWTH (Spans 2 columns on large screens) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="col-span-1 md:col-span-3 lg:col-span-2 row-span-2 bg-[#2e2e2e] border border-[#bf9b30]/20 p-8 lg:p-10 rounded-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50">
               <TrendingUp size={100} className="text-[#bf9b30]/5" strokeWidth={1} />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 bg-[#bf9b30] text-[#292929] text-md font-bold uppercase tracking-wider rounded-full">
                    The Comeback
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-light text-white mb-4 leading-snug">
                  From <span className="text-[#bf9b30]">₹600</span> Investment to a <span className="text-[#bf9b30]">₹45 Lakh</span> Valuation
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-md lg:text-base text-justify">
                  In 2018, defying a major financial setback, we launched <strong>Arasi Soap Works</strong> with a humble capital of just ₹600. Through the challenging COVID era, we scaled operations relentlessly. Today, it stands as a testament to resilience, offering 35+ products and serving thousands.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                 <div>
                   <span className="block text-3xl font-normal text-white"><Counter value={35} suffix="+" /></span>
                   <span className="text-xs text-gray-500 uppercase tracking-wider">Products Launched</span>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#bf9b30] group-hover:border-[#bf9b30] transition-all cursor-pointer">
                    <ArrowUpRight size={20} className="text-gray-400 group-hover:text-[#292929]" />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* 4. KEY STAT: PRODUCTS (Stacked) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="col-span-1 md:col-span-3 lg:col-span-2 bg-[#333] border border-white/5 p-8 rounded-sm hover:border-[#bf9b30]/30 transition-colors"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6">
               {/* <div className="p-4 bg-[#bf9b30]/10 rounded-full text-[#bf9b30] shrink-0">
                 <Users size={28} strokeWidth={1.5} />
               </div> */}
               <div>
                 <h4 className="text-xl text-white font-light mb-2">Community Impact</h4>
                 <p className="text-md text-gray-400 leading-relaxed text-justify">
                   Beyond business, we are committed to Pondicherry's growth. Through <strong>Huntsworld</strong>, we are digitizing local businesses, bridging the gap between traditional merchants and the modern digital economy.
                 </p>
               </div>
            </div>
          </motion.div>

          {/* 5. ACHIEVEMENT: TECH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="col-span-1 md:col-span-3 lg:col-span-2 bg-[#333] border border-white/5 p-8 rounded-sm hover:border-[#bf9b30]/30 transition-colors"
          >
             <div className="flex justify-between items-start">
               <div>
                  <h4 className="text-xl text-white font-light mb-2">Digital Ecosystem</h4>
                  <p className="text-md text-gray-400 leading-relaxed max-w-md text-justify">
                    Successfully launched <strong>Huntsworld Properties</strong> & B2B platforms, creating a unified ecosystem for Real Estate, Chemicals, and Retail.
                  </p>
               </div>
               <div className="hidden lg:block">
                 <span className="text-5xl font-thin text-[#bf9b30]/20">04</span>
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
