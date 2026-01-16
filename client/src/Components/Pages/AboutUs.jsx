import React from 'react';
import { motion } from 'framer-motion';

const AboutIyyanAlliFull = () => {
  return (
    <section className="relative w-full bg-[#292929] text-gray-200 min-h-screen" id='about'>
      <div className="flex flex-col lg:flex-row w-full">

        {/* LEFT SIDE: STICKY IMAGE */}
        {/* This image stays fixed while you scroll the text on the right */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen lg:sticky lg:top-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="IyyanAlli History"
            className="w-full h-full object-cover grayscale opacity-90"
          />
        </div>

        {/* RIGHT SIDE: SCROLLABLE CONTENT */}
        <div className="w-full lg:w-1/2 px-8 py-20 lg:px-20 lg:py-32 bg-[#292929]">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 border-l-[1px] border-white/20 pl-6"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-gray-500 block mb-2">About Us</span>

            {/* UPDATED COLOR HERE */}
            <h2 className="text-3xl lg:text-4xl font-light text-[#bf9b30] tracking-wide">
              IyyanAlli Groups
            </h2>
          </motion.div>

          <div className="space-y-12">

            {/* Paragraph 1: The Foundation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p className="text-md font-light leading-8 tracking-wide text-white text-justify">
                At <span className="text-[#bf9b30] font-normal">Iyyanalli Groups</span>, we embody the spirit of perseverance and innovation, built on the foundation laid by Mr. R. LakshmiNarayanan, a visionary realtor in Pondicherry who began his journey in 1999. Naming his real estate venture Thirukumaran Real Estate in 2004, he successfully completed over 28 landmark projects, earning recognition as one of the region's top realtors. He also pioneered TK Banners and Thirukumaran Travels, showcasing his diverse entrepreneurial drive.
              </p>
            </motion.div>

            <div className="w-12 h-[1px] bg-[#bf9b30]"></div>

            {/* Paragraph 2: The Comeback */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p className="text-md font-light leading-8 tracking-wide text-white text-justify">
                In 2012, a major setback tested our resolve, but it fueled our comeback. In 2018, L. Nandha Kumaran—son of R. LakshmiNarayanan—joined forces with his father to launch Arasi Soap Works with just ₹600, starting with phenyl production. This bold move exploded during the COVID era, expanding to over 35 detergent and cleaning products today, with the company now valued at ₹35-45 lakhs—now owned and led by Mrs. L. Swarnalakshmi following her husband's passing. In 2019, we launched MerchantExpo, a profitable business listing platform—shut down in 2020 due to family challenges, only to relaunch with unique monetization features as Huntsworld. In 2023, we established NK Chemicals, our thriving chemical dealership.
              </p>
            </motion.div>

            <div className="w-12 h-[1px] bg-[#bf9b30]"></div>

            {/* Paragraph 3: The Legacy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <p className="text-md font-light leading-8 tracking-wide text-white text-justify">
                Tragedy struck in 2024 when Mr. LakshmiNarayanan passed away following an accident, but his legacy endures. Under L. Nandha Kumaran's leadership, we've breathed new life into Thirukumaran Real Estate through Huntsworld Properties—a dynamic property listing and promotion platform. Now, Iyyanalli Groups unites it all under Huntsworld, our flagship: a unique business listing ecosystem where companies and products gain visibility, and users monetize effortlessly.
              </p>
            </motion.div>

            {/* Paragraph 4: Conclusion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 border border-white/5 mt-8"
            >
              <p className="text-md font-light leading-8 tracking-wide text-white text-justify">
                From real estate and chemicals to detergents and digital platforms, Iyyanalli Groups is more than a business—it's a Pondicherry-born story of rising stronger, serving communities with trust, quality, and opportunity.
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIyyanAlliFull;
