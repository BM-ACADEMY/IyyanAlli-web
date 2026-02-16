import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";
import axios from "axios";

const InvestorModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    investmentType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/iyyanalli/investor-inquiry`,
        formData,
      );

      if (response.data.success) {
        setMessage({
          type: "success",
          text: "Thank you! Your inquiry has been submitted successfully.",
        });
        setFormData({
          name: "",
          business: "",
          phone: "",
          email: "",
          investmentType: "",
        });
        setTimeout(() => {
          onClose();
          setMessage({ type: "", text: "" });
        }, 2000);
      }
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to submit inquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-[#222] border border-white/10 rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-semibold text-white">
            Investor Inquiry
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Investor Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Investor Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#333] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#bf9b30] transition-colors"
              placeholder="Enter your name"
            />
          </div>

          {/* Business (Optional) */}
          <div>
            <label
              htmlFor="business"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Your Business{" "}
              <span className="text-gray-500 text-xs">(Optional)</span>
            </label>
            <input
              type="text"
              id="business"
              name="business"
              value={formData.business}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#333] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#bf9b30] transition-colors"
              placeholder="Enter your business name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#333] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#bf9b30] transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#333] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#bf9b30] transition-colors"
              placeholder="Enter your email"
            />
          </div>

          {/* Investment Type */}
          <div>
            <label
              htmlFor="investmentType"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Which business would you like to invest in?{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="investmentType"
              name="investmentType"
              value={formData.investmentType}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-[#333] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#bf9b30] transition-colors"
              placeholder="Enter the business name"
            />
          </div>

          {/* Message */}
          {message.text && (
            <div
              className={`p-3 rounded-lg text-sm ${
                message.type === "success"
                  ? "bg-green-500/10 text-green-400 border border-green-500/20"
                  : "bg-red-500/10 text-red-400 border border-red-500/20"
              }`}
            >
              {message.text}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-[#bf9b30] text-white font-semibold rounded-lg hover:bg-[#a88628] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Inquiry"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InvestorModal;
