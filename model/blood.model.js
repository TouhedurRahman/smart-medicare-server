const mongoose = require("mongoose");
const validator = require("validator");

const BloodSchema = mongoose.Schema({
   firstName: {
      type: String,
      required: [true, "please provide a name"],
      trim: true
   },
   lastName: {
      type: String,
      required: [true, "please provide a name"],
      trim: true
   },
   img: {
      type: String,
   },
   email: {
      type: String,
      required: [true, "please provide email"],
      trim: true,
      unique: [true, "must be a unique email"]
   },
   gender: {
      type: String,
      required: [true, "please provide a name"],
   },
   bloodGroup: {
      type: String,
      required: [true, "must be a blood group sent"],
      uppercase: true
   },
   status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
   },
   phone: {
      type: String
   },
   location: {
      type: String
   },
   file: {
      type: String
   }


},
   {
      timestamps: true
   })

const Blood = new mongoose.model("Blood", BloodSchema);
module.exports = Blood;