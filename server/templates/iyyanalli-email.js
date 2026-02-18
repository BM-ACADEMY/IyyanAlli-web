const mainColor = "#bf9b30"; // IyyanAlli Gold
const accentColor = "#222"; // Dark background
const date = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

// Contact Email Template
exports.contactEmail = function ({ name, email, phone, message }) {
  return {
    adminSubject: `🚀 New Contact Enquiry: ${name}`,
    userSubject: `Thank you for contacting IyyanAlli Groups`,

    // --- ADMIN EMAIL ---
    adminHtml: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fb; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: ${accentColor}; padding: 30px; text-align: center;">
            <h1 style="color: ${mainColor}; margin: 0; font-size: 24px;">New Website Enquiry</h1>
          </div>
          <div style="padding: 40px;">
            <p style="color: #555;"><strong>Hello Admin,</strong><br>You have a new message from the website.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Name</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${name}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${email}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${phone}</td></tr>
            </table>
            <div style="background-color: #f9fafc; padding: 20px; border-left: 4px solid ${mainColor}; margin-top: 25px;">
              <p style="margin: 0; color: #666;">"${message}"</p>
            </div>
            <p style="text-align: right; color: #999; font-size: 12px; margin-top: 30px;">Received: ${date}</p>
          </div>
        </div>
      </div>
    `,

    // --- USER RECEIPT EMAIL ---
    userHtml: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fb; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: ${accentColor}; padding: 30px; text-align: center;">
            <h1 style="color: ${mainColor}; margin: 0; font-size: 22px;">IyyanAlli Groups</h1>
          </div>
          <div style="padding: 40px; text-align: center;">
            <h2 style="color: ${accentColor}; margin-top: 0;">We received your message!</h2>
            <p style="color: #555; line-height: 1.6;">
              Hi <strong>${name}</strong>,<br>
              Thank you for reaching out to IyyanAlli Groups. Our team will contact you shortly at <strong>${phone}</strong>.
            </p>
            <div style="margin: 30px 0; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="color: #666; font-size: 14px;">We appreciate your interest in our business ventures.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  };
};

// Investor Inquiry Email Template
exports.investorEmail = function ({
  name,
  business,
  phone,
  email,
  investmentType,
  description,
}) {
  return {
    adminSubject: `💼 New Investor Inquiry: ${name} - ${investmentType || "General Inquiry"}`,
    userSubject: `Thank you for your investment inquiry - IyyanAlli Groups`,

    // --- ADMIN EMAIL ---
    adminHtml: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fb; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: ${accentColor}; padding: 30px; text-align: center;">
            <h1 style="color: ${mainColor}; margin: 0; font-size: 24px;">💼 New Investor Inquiry</h1>
          </div>
          <div style="padding: 40px;">
            <p style="color: #555;"><strong>Hello Team,</strong><br>You have a new investor inquiry from the website.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Investor Name</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${name}</td></tr>
              ${business ? `<tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Their Business</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${business}</td></tr>` : ""}
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Email</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${email}</td></tr>
              <tr><td style="padding: 10px; border-bottom: 1px solid #eee; color: #888;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; color: #333;">${phone}</td></tr>
            </table>
            <div style="background-color: #f9fafc; padding: 20px; border-left: 4px solid ${mainColor}; margin-top: 25px;">
              <p style="margin: 0; color: #333; font-weight: bold;">Investment Interest:</p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 18px;">${investmentType || "Not Specified"}</p>
            </div>
            ${
              description
                ? `<div style="background-color: #f9fafc; padding: 20px; border-left: 4px solid ${mainColor}; margin-top: 25px;">
              <p style="margin: 0; color: #333; font-weight: bold;">Description:</p>
              <p style="margin: 10px 0 0 0; color: #666; font-size: 16px;">${description}</p>
            </div>`
                : ""
            }
            <p style="text-align: right; color: #999; font-size: 12px; margin-top: 30px;">Received: ${date}</p>
          </div>
        </div>
      </div>
    `,

    // --- INVESTOR RECEIPT EMAIL ---
    userHtml: `
      <div style="font-family: Arial, sans-serif; background-color: #f4f7fb; padding: 40px 0;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="background-color: ${accentColor}; padding: 30px; text-align: center;">
            <h1 style="color: ${mainColor}; margin: 0; font-size: 22px;">IyyanAlli Groups</h1>
          </div>
          <div style="padding: 40px; text-align: center;">
            <h2 style="color: ${accentColor}; margin-top: 0;">Thank you for your investment interest!</h2>
            <p style="color: #555; line-height: 1.6;">
              Dear <strong>${name}</strong>,<br>
              Thank you for expressing interest in investing with IyyanAlli Groups.
            </p>
            <div style="background-color: #f9fafc; padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="margin: 0; color: #888; font-size: 14px;">Your investment interest:</p>
              <p style="margin: 10px 0 0 0; color: ${mainColor}; font-size: 18px; font-weight: bold;">${investmentType}</p>
            </div>
            <p style="color: #555; line-height: 1.6;">
              Our investment team will review your inquiry and contact you at <strong>${phone}</strong> within 2-3 business days to discuss potential opportunities.
            </p>
            <div style="margin: 30px 0; border-top: 1px solid #eee; padding-top: 20px;">
              <p style="color: #666; font-size: 14px;">We appreciate your confidence in IyyanAlli Groups and look forward to exploring partnership opportunities with you.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  };
};
