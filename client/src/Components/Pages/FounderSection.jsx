import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowUpRight, Award, Building2, GraduationCap, Layers } from 'lucide-react';
import Founder from "@/assets/img/founder.jpeg"; // Ensure this path is correct

const FounderSection = () => {
  // Animation Variants
  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#292929] text-slate-800 py-20 md:py-32 relative overflow-hidden font-sans" id='founder'>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#f0ede6] skew-x-12 translate-x-32 z-0" />
      <div className="absolute bottom-20 left-10 w-64 h-64 border border-[#bf9b30]/10 rounded-full z-0" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">

          {/* LEFT: Image Area */}
          <motion.div
            className="lg:col-span-5 relative z-10"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative h-[550px] md:h-[700px] w-full shadow-2xl overflow-hidden group">
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10 opacity-60"></div>

              {/* Border Accent */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/20 z-20 pointer-events-none"></div>

              <img
                src={Founder}
                alt="Nandha Kumaran"
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
              />

              {/* Qualification Badge */}
              <div className="absolute bottom-8 left-8 z-30 hidden md:block">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-sm border-l-4 border-[#bf9b30]">
                  <GraduationCap size={18} className="text-[#bf9b30]" />
                  <span className="text-slate-900 font-bold text-sm tracking-wide">B.Sc. IT, MCA</span>
                </div>
              </div>
            </div>

            {/* Solid Gold Square Accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#bf9b30] z-[-1]" />
          </motion.div>

          {/* RIGHT: Content Card */}
          <motion.div
            className="lg:col-span-7 lg:-ml-24 relative z-20 mt-8 lg:mt-0"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-sm border-t-4 border-[#bf9b30]">

              {/* Header Section */}
              <div className="flex justify-between items-start mb-8 relative">
                <div>
                  <h4 className="text-[#bf9b30] font-bold tracking-[0.2em] uppercase text-xs mb-3">
                    Our Founder
                  </h4>
                  <h1 className="text-4xl md:text-5xl font-serif text-slate-900 leading-[1.1]">
                    L. Nandha Kumaran <br />
                    <span className="text-2xl md:text-3xl text-slate-400 font-light block mt-2">S/O R. Lakshminarayanan</span>
                  </h1>
                </div>
                {/* Quote Icon */}
                <Quote className="text-[#f1f1f1] w-32 h-32 absolute -right-6 -top-10 -z-10 transform rotate-12" />
              </div>

              {/* Body Text */}
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg font-light text-justify">

                {/* Paragraph 1: Intro & Scope */}
                <p>
                  <strong className="text-slate-900 font-medium">L. Nandha Kumaran</strong> is the driving force behind <span className="text-[#bf9b30] font-medium">Iyyanalli Groups</span>, a Pondicherry-based powerhouse uniting <span className="text-slate-900 underline decoration-[#bf9b30]/50 underline-offset-4">real estate, manufacturing, chemicals, and digital platforms</span>.
                </p>

                {/* Paragraph 2: Father's Legacy */}
                <p>
                  Son of pioneering entrepreneur <strong className="text-slate-900 font-medium">Mr. R. LakshmiNarayanan</strong>—who laid the groundwork with <em>Thirukumaran Real Estate (2004), TK Banners, and Thirukumaran Travels</em>—Nandha Kumaran stepped into leadership following his father's passing in 2024.
                </p>

                {/* Paragraph 3: Consolidation & Vision */}
                <p>
                  Under his vision, all ventures—<span className="text-slate-800 font-normal">Thirukumaran Real Estate, Arasi Soap Works, NK Chemicals, Huntsworld, and Huntsworld Properties</span>—thrive as Iyyanalli Groups, blending tradition with innovation to empower Pondicherry's businesses.
                </p>

                {/* Pull Quote */}
                <div className="border-l-2 border-[#bf9b30] pl-6 py-1 my-6">
                  <p className="text-xl text-slate-800 italic font-serif">
                    "We don't just build businesses; we build ecosystems. Bridging Pondicherry's traditional industries with modern digital opportunities is not just our job—it is our legacy."
                  </p>
                </div>
              </div>

              {/* Stats & CTA Footer */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 pt-10 border-t border-slate-100 items-end">

                {/* Stat 1 */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#bf9b30]">
                    <Award size={20} strokeWidth={1.5} />
                    <span className="font-serif font-medium text-3xl text-slate-900">25+</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Years of Legacy</p>
                </div>

                {/* Stat 2 */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[#bf9b30]">
                    <Layers size={20} strokeWidth={1.5} />
                    <span className="font-serif font-medium text-3xl text-slate-900">5+</span>
                  </div>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Business Verticals</p>
                </div>

                {/* Connect Button */}
                <div className="flex justify-start md:justify-end">
                  <a href="#contact" className="group flex items-center gap-3 px-6 py-3 bg-[#1e293b] text-white text-sm tracking-wide transition-all hover:bg-[#bf9b30]">
                    <span>Connect With Us</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FounderSection;
