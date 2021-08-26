const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    name: { type: "string", required: true },
    email: { type: "string", required: true, unique: true },
    password: { type: "string", required: true, select: true },
    username: { type: "string", required: true, unique: true, trim: true },
    profilePicUrl: { type: String },
    newMessagePopup: { type: Boolean, default: true },
    unreadMessage: { type: Boolean, default: false },
    unreadNotification: { type: Boolean, default: false },
    role: { type: String, default: "user", enum: ["user", "root"] },
    resetToken: { type: String },
    expireToken: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
