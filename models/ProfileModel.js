const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "user" },
    bio: { type: "string", required: true },
    social: {
      facebook: { type: "string" },
      twitter: { type: String },
      youtube: { type: String },
      instagram: { type: String },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
