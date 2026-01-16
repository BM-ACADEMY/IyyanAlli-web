import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Check, Loader2 } from 'lucide-react';

const ContactSectionV2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // VALIDATION FOR PHONE: Only numbers, max 10 digits
    if (name === 'phone') {
      // Remove any non-number characters
      const numericValue = value.replace(/[^0-9]/g, '');

      // Only update if length is <= 10
      if (numericValue.length <= 10) {
        setFormData({ ...formData, [name]: numericValue });
      }
    } else {
      // Normal update for other fields
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  // Styles for the "Contract" inputs
  const inputContainerClass = "relative group";
  const inputClass = (fieldName) => `
    w-full bg-transparent border-b py-4 text-white placeholder-transparent focus:outline-none transition-all duration-300
    ${focusedField === fieldName || formData[fieldName] ? 'border-[#bf9b30]' : 'border-white/20 group-hover:border-white/40'}
  `;
  const labelClass = (fieldName) => `
    absolute left-0 transition-all duration-300 pointer-events-none uppercase text-xs font-bold tracking-widest
    ${focusedField === fieldName || formData[fieldName]
      ? '-top-2 text-[#bf9b30] text-[10px]'
      : 'top-4 text-gray-500'}
  `;

  return (
    <section className="min-h-screen bg-[#292929] py-24 px-4 font-sans selection:bg-[#bf9b30] selection:text-[#292929] relative overflow-hidden flex items-center" id='contact'>

      {/* --- BACKGROUND GRID PATTERN --- */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* --- LEFT SIDE: THE EDITORIAL FORM --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-5xl lg:text-7xl font-thin text-white tracking-tighter mb-4">
                Let's <span className="italic font-serif text-[#bf9b30]">Connect With Us</span>
              </h2>
              <p className="text-gray-400 font-light text-lg max-w-lg">
                Tell us about your project or inquiry. We are ready to build the future with you.
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={inputContainerClass}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass('name')}
                    required
                  />
                  <label className={labelClass('name')}>Full Name</label>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={inputContainerClass}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClass('email')}
                    required
                  />
                  <label className={labelClass('email')}>Email Address</label>
                </motion.div>
              </div>

              {/* Row 2: Phone Number (Full Width) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={inputContainerClass}
              >
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                  className={inputClass('phone')}
                  required
                  maxLength={10} // Enforce max length in HTML
                  placeholder=""
                />
                <label className={labelClass('phone')}>Phone Number (10 Digits)</label>
              </motion.div>

              {/* Row 3: Message */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className={`${inputContainerClass} pt-4`}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="1"
                  className={`${inputClass('message')} resize-none min-h-[60px]`}
                  required
                />
                <label className={labelClass('message')}>Your Message</label>
              </motion.div>

              {/* Unique Submit Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-6"
              >
                <button
                  disabled={isSubmitting || isSubmitted}
                  className="group flex items-center gap-4 text-white transition-all disabled:opacity-50"
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 group-hover:bg-[#bf9b30] group-hover:border-[#bf9b30]
                    ${isSubmitted ? 'bg-green-500 border-green-500' : ''}`}>
                    {isSubmitting ? <Loader2 className="animate-spin text-white" /> :
                      isSubmitted ? <Check className="text-white" /> :
                        <ArrowRight className="text-white group-hover:translate-x-1 transition-transform" />
                    }
                  </div>
                  <span className="text-lg font-light tracking-widest uppercase group-hover:text-[#bf9b30] transition-colors">
                    {isSubmitted ? 'Message Sent' : 'Send Request'}
                  </span>
                </button>
              </motion.div>

            </form>
          </div>


          {/* --- RIGHT SIDE: GLASS INFO CARD --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 w-full mt-12 lg:mt-0"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 lg:p-12 rounded-sm relative overflow-hidden shadow-2xl">
              {/* Decorative Gold Bar */}
              <div className="absolute top-0 left-0 w-full h-1 bg-[#bf9b30]"></div>

              <h3 className="text-2xl font-light text-white mb-8">Contact Information</h3>

              <div className="space-y-10">
                {/* Item 1 */}
                <div className="flex gap-6 items-start">
                  <div className="p-3 border border-white/10 rounded-full text-[#bf9b30] bg-[#292929] shadow-lg">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call Us Directly</p>
                    <a href="tel:9944355114" className="block text-lg text-white font-light hover:text-[#bf9b30] transition-colors">9944355114</a>
                    <a href="tel:8667233235" className="block text-lg text-white font-light hover:text-[#bf9b30] transition-colors">8667233235</a>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-6 items-start">
                  <div className="p-3 border border-white/10 rounded-full text-[#bf9b30] bg-[#292929] shadow-lg">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Inquiries</p>
                    <a href="mailto:nandha@huntsworld.com" className="block text-lg text-white font-light hover:text-[#bf9b30] transition-colors">nandha@huntsworld.com</a>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-6 items-start">
                  <div className="p-3 border border-white/10 rounded-full text-[#bf9b30] bg-[#292929] shadow-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Headquarters</p>
                    <p className="text-lg text-white font-light">Arasi soap works,
                      2,East coast road,
                      Bahour,
                      Kattukuppam,Puducherry-607402</p>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 font-light italic">
                  "Bridging traditional industries with digital opportunities."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSectionV2;
