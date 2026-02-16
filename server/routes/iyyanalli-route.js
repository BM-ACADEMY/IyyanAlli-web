const router = require("express").Router();
const {
  sendEnquiryMail,
  sendInvestorInquiry,
} = require("../controllers/iyyanalli-controller");

router.post("/contact-email", sendEnquiryMail);
router.post("/investor-inquiry", sendInvestorInquiry);

module.exports = router;
