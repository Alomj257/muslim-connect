const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    middlename: String,
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    phone: String,
    isEnable: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: true,
    },
    otp: { isotp: { type: Boolean, default: false }, otp: String },
    role: {
      type: String,
      required: true,
      enum: ["ADMIN", "CONSULTANT", "USER"],
    },
    profile: String,
    rating: String,
    description: String,
    location: String,
    availableTime: Array,
    educations: Array,
    languages: Array,
    intrests: Array,
    skills: Array,
    socialMedia: Array,
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password") || user.isNew) {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
  }
  next();
});

userSchema.methods.comparedPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;

// "email":"admin@gmail.com",
// "password":"admin",

// "email":"mech@gmail.com",
// "password":"mech",

// "email":"dr@gmail.com",
// "password":"dr",
