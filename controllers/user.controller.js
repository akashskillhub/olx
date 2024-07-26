const asyncHandler = require("express-async-handler")
const User = require("../models/User")
const sendEmail = require("../utils/email")
exports.verifyUserEmail = asyncHandler(async (req, res) => {
    // console.log(req.loggedInUser)
    const result = await User.findById(req.loggedInUser)
    console.log(result);
    const otp = Math.floor(10000 + Math.random() * 900000)
    await User.findByIdAndUpdate(req.loggedInUser, { emailCode: otp })
    const isSend = await sendEmail({
        to: result.email,
        subject: "Verify Email",
        message: `Your OTP ${otp}`
    })
    if (isSend) {
        res.json({ message: "Verification Send Success" })
    } else {
        res.status(502).json({ message: "unable to send email" })

    }
})