const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/drbaz5inu/image/upload/v1721291241/dummy_giblki.png"
    },
    password: {
        type: String,
        required: true
    },
    code: {
        type: String,
    },
    verified: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    mobile: {
        type: Number,
        required: true
    },
}, { timestamps: true })

module.exports = mongoose.model("user", userSchema)