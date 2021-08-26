const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const jst = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");

router.post("/", async (req, res) => {
  const { email, password } = req.body.user;

  if (!isEmail) return res.status(401).send("Invalid email address");

  if (password.length < 6) {
    return res.status(401).send("Password must be at least 6 characters");
  }

  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    if (!user) {
      return res.status(401).send("Invalid Credentials");
    }

    const payload = { userId: user._id };
    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expireIn: "2d" },
      (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      }
    );
  } catch (err) {
    console.log(err);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
