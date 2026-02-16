const transporter = require("../config/iyyanalli");
const iyyanAlliEmail = require("../templates/iyyanalli-email");

// Contact/Enquiry Email
exports.sendEnquiryMail = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Name, Email, and Phone are required.",
        });
    }

    const mailData = iyyanAlliEmail.contactEmail({
      name,
      email,
      phone,
      message,
    });

    // 1. Send to Admin
    await transporter.sendMail({
      from: process.env.Email_USER,
      to: process.env.Email_USER,
      replyTo: email,
      subject: mailData.adminSubject,
      html: mailData.adminHtml,
    });

    // 2. Send Receipt to User
    await transporter.sendMail({
      from: process.env.Email_USER,
      to: email,
      subject: mailData.userSubject,
      html: mailData.userHtml,
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Mail Error:", err);
    return res
      .status(500)
      .json({ success: false, message: "Failed to send email." });
  }
};

// Investor Inquiry Email
exports.sendInvestorInquiry = async (req, res) => {
  try {
    const { name, business, phone, email, investmentType } = req.body;

    // Validation
    if (!name || !email || !phone || !investmentType) {
      return res.status(400).json({
        success: false,
        message: "Name, Email, Phone, and Investment Type are required.",
      });
    }

    const mailData = iyyanAlliEmail.investorEmail({
      name,
      business,
      phone,
      email,
      investmentType,
    });

    // Send to nandhu@huntsworld.com
    await transporter.sendMail({
      from: process.env.Email_USER,
      to: "nandhu@huntsworld.com",
      replyTo: email,
      subject: mailData.adminSubject,
      html: mailData.adminHtml,
    });

    // Send Receipt to Investor
    await transporter.sendMail({
      from: process.env.Email_USER,
      to: email,
      subject: mailData.userSubject,
      html: mailData.userHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Investor inquiry submitted successfully!",
    });
  } catch (err) {
    console.error("Investor Mail Error:", err);
    return res.status(500).json({
      success: false,
      message: "Failed to send investor inquiry.",
    });
  }
};
