import React from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  User,
  GraduationCap,
  ExternalLink
} from 'lucide-react';

import Logo1 from "@/assets/brands/real.jpeg"
import Logo2 from "@/assets/brands/arasi.jpeg"
import Logo3 from "@/assets/brands/hw.jpeg"
import Logo4 from "@/assets/brands/nk.jpeg"
import Logo5 from "@/assets/brands/hw2.jpeg"

const IyyanAlliPortfolioV6 = () => {

  const companies = [
    {
      id: 1,
      name: "Thirukumaran Real Consultancy",
      meta: "Since 1999",
      role: "Founder: R. Lakshminarayanan",
      details: ["21+ Landmark Projects Completed"],
      contacts: [
        { type: "phone", value: "9585574911" },
        { type: "email", value: "thirukumaran.realestate@gmail.com" }
      ],
      // Placeholder image - replace with actual logo
      logo: Logo1,
    },
    {
      id: 2,
      name: "Arasi Soap Works",
      role: "Owner: Mrs. L. Swarnalakshmi",
      meta: "Since 2018",
      details: ["35+ Detergent & Cleaning Products"],
      website: "www.arasisoap.com",
      contacts: [
        { type: "phone", value: "8682967445" },
        { type: "phone", value: "9442395444" }
      ],
      logo: Logo2,
    },
    {
      id: 3,
      name: "Huntsworld Properties and Promoters",
      role: "Promoters",
      meta: "Since 2024",
      details: ["Dynamic Property Listing Platform"],
      website: "www.huntsworldproperties.com",
      contacts: [
        { type: "phone", value: "9585574911" },
        { type: "email", value: "nandhakumaran@huntsworldproperties.com" }
      ],
      logo: Logo3,
    },
    {
      id: 4,
      name: "NK Chemicals",
      meta: "Since 2023",
      role: "Chemical Dealer",
      details: ["Industrial & Commercial Supply"],
      contacts: [
        { type: "phone", value: "6381505596" }
      ],
      logo: Logo4,
    },
    {
      id: 5,
      name: "Huntsworld (B2B)",
      meta: "Since 2026",
      role: "Business Listing Ecosystem",
      details: ["B2B Connections", "Monetization Features"],
      contacts: [
        { type: "phone", value: "9944355114" },
        { type: "phone", value: "9944810225" },
        { type: "email", value: "nandha@huntsworld.com" },
        { type: "email", value: "Mahalakshmi@huntsworld.com" }
      ],
      logo: Logo5,
    }
  ];

  return (
    <section className="min-h-screen bg-[#292929] py-20 px-4 overflow-hidden relative font-sans selection:bg-[#bf9b30] selection:text-[#292929]" id='brands'>

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-[#bf9b30] rounded-full mix-blend-overlay filter blur-[120px] opacity-10"></div>
        <div className="absolute bottom-[10%] right-[20%] w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-[120px] opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">

        {/* --- SECTION DIVIDER: OUR BRANDS --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mb-24"
        >
          <div className="absolute w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#bf9b30]/40 to-transparent"></div>
          <div className="relative bg-[#292929] px-6">
            <span className="text-[#bf9b30] text-sm font-bold tracking-[0.4em] uppercase">Our Brands</span>
          </div>
        </motion.div>

        {/* --- HEADER DESIGN --- */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center mb-20 space-y-8"
        >
          {/* Subtle Icon Badge */}
          <div className="w-16 h-16 rounded-full border border-[#bf9b30]/30 flex items-center justify-center bg-[#bf9b30]/10 text-[#bf9b30] mb-4 shadow-[0_0_20px_rgba(191,155,48,0.2)]">
            <User size={32} strokeWidth={1.5} />
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-thin text-white tracking-tight">
              L. Nandha <span className="text-[#bf9b30] font-normal">Kumaran  </span>
            </h1>
            <h2 className='text-4xl text-white '>
              Founder <span className='text-[#bf9b30]'>& CEO</span>
            </h2>
            <p className="text-sm lg:text-base font-light text-gray-400 uppercase tracking-[0.3em]">
              S/O R. Lakshminarayanan
            </p>
          </div>

          {/* Details Row (Education & Contacts) */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 mt-4">

            {/* Education Tag */}
            <div className="flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs font-semibold tracking-wider">
              <GraduationCap size={14} className="text-[#bf9b30]" />
              <span>BSC.IT, MCA</span>
            </div>

            {/* Phone Links */}
            <div className="flex gap-6">
              <a href="tel:8667233235" className="flex items-center gap-2 text-gray-400 hover:text-[#bf9b30] transition-colors text-sm font-light">
                <Phone size={14} /> 8667233235
              </a>
              <a href="tel:9944355114" className="flex items-center gap-2 text-gray-400 hover:text-[#bf9b30] transition-colors text-sm font-light">
                <Phone size={14} /> 9944355114
              </a>
            </div>

          </div>
        </motion.div>



        {/* --- TIMELINE --- */}
        <div className="relative">

          {/* Vertical Center Line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#bf9b30]/50 to-transparent transform -translate-x-1/2"></div>

          <div className="space-y-16 lg:space-y-24">
            {companies.map((company, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col lg:flex-row items-center w-full ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >

                  {/* CENTRAL DOT */}
                  <div className="absolute left-6 lg:left-1/2 flex items-center justify-center transform -translate-x-1/2 z-20">
                    <div className="w-3 h-3 bg-[#bf9b30] rounded-full shadow-[0_0_15px_#bf9b30]"></div>
                  </div>

                  {/* HORIZONTAL CONNECTOR LINE (Desktop Only) */}
                  <div className={`hidden lg:block absolute top-1/2 w-16 h-[1px] bg-[#bf9b30]/50
                    ${isEven ? 'right-1/2 origin-right' : 'left-1/2 origin-left'}`}
                  />

                  {/* Spacer for Layout (50% width) */}
                  <div className="w-full lg:w-1/2 p-0"></div>

                  {/* CONTENT CARD */}
                  <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="group relative bg-[#323030] border border-white/10 p-8 rounded-sm hover:border-[#bf9b30]/40 transition-all duration-500 overflow-hidden shadow-lg"
                    >
                      {/* --- BACKGROUND IMAGE & OVERLAY --- */}
                      <div className="absolute inset-0 z-0 h-full w-full">
                        <img
                          src={company.logo}
                          alt="Brand Background"
                          className="h-full w-full object-cover object-right opacity-100 transition-opacity duration-700"
                        />

                        {/* UPDATED GRADIENT:
         - from-[#323030]: Solid color on the far left (Maximum readability)
         - via-[#323030]/80: 80% opacity in the middle (Less see-through than before)
         - to-transparent: Shows the image clearly on the far right
      */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#323030] via-[#323030]/80 to-transparent z-10" />
                      </div>

                      {/* --- CONTENT --- */}
                      <div className="relative z-20 max-w-[85%]">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            {/* 1. TITLE: Increased to text-2xl (mobile) and text-3xl (desktop) */}
                            <h3 className="text-2xl lg:text-3xl font-light text-white tracking-wide group-hover:text-[#bf9b30] transition-colors relative drop-shadow-md">
                              {company.name}
                            </h3>
                            <div className="h-[1px] w-12 bg-[#bf9b30] mt-3 mb-3 shadow-sm"></div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="flex flex-col gap-1">
                            {/* 2. ROLE: Increased to text-lg */}
                            <p className="text-lg font-medium text-gray-100 drop-shadow-md">
                              {company.role}
                            </p>
                            {/* 3. META: Increased to text-sm */}
                            {company.meta && <p className="text-sm text-gray-300 uppercase tracking-widest drop-shadow-md">{company.meta}</p>}
                          </div>

                          <ul className="space-y-2">
                            {company.details.map((detail, i) => (
                              /* 4. DETAILS: Increased to text-base (16px) */
                              <li key={i} className="text-base text-gray-200 font-light flex items-start gap-2">
                                <span className="mt-2 w-1.5 h-1.5 bg-[#bf9b30] rounded-full shrink-0 shadow-sm"></span>
                                <span className="leading-relaxed drop-shadow-md">{detail}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Link / Contact Area */}
                          <div className="pt-6 mt-2 border-t border-white/20 flex flex-wrap gap-x-6 gap-y-3">
                            {company.website && (
                              <a
                                href={`https://${company.website}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                /* 5. LINKS: Increased to text-sm */
                                className="flex items-center gap-2 text-sm text-[#bf9b30] hover:text-white transition-colors group/link cursor-pointer drop-shadow-md"
                              >
                                <ExternalLink size={14} /> {company.website}
                              </a>
                            )}

                            {company.contacts.map((contact, i) => {
                              const href = contact.type === 'phone'
                                ? `tel:${contact.value.replace(/\s+/g, '')}`
                                : `mailto:${contact.value}`;

                              return (
                                <a
                                  key={i}
                                  href={href}
                                  /* 5. LINKS: Increased to text-sm */
                                  className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#bf9b30] transition-colors cursor-pointer drop-shadow-md"
                                >
                                  {contact.type === 'phone' ? <Phone size={14} /> : <Mail size={14} />}
                                  <span className="font-light tracking-wide">{contact.value}</span>
                                </a>
                              )
                            })}
                          </div>
                        </div>
                      </div>

                    </motion.div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default IyyanAlliPortfolioV6;
