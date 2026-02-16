const nodemailer = require("nodemailer");
require("dotenv").config();

// IyyanAlli Groups Email Transporter
const iyyanAlliTransporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.Email_USER,
    pass: process.env.Email_PASS,
  },
});

iyyanAlliTransporter.verify((err) => {
  if (err) console.error("❌ IyyanAlli SMTP Error:", err);
  else console.log("✅ IyyanAlli SMTP Ready");
});

module.exports = iyyanAlliTransporter;
