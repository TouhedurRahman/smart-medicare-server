const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;
const appointmentSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "please provide a name"],
      trim: true
   },
   //   userEmail:{
   //    type:String,
   //    required:[true,"please login first"],
   //    validate:[validator.isEmail]
   //   },
   userName: {
      type: String,

   },
   chamber:{
      type:String,
      required:[true,"must be set a chamber"]
     }, visitTime:{
      type:String,
      required:[true,"must be set a visit time"]
     },
   patientName: {
      type: String,
      required: [true, "provide a patient name"],
      trim: true
   },
   contactNumber: {
      type: String,
      required: [true, "please given contact patient name"],
      validate: [validator.isMobilePhone, "Please provide a valid mobile"],
      trim: true
   },
   imgUrl: {
      type: String,
      required: [true, "please provide img url"],
      validate: [validator.isURL, "Please provide a valid url"],
   },
   specialist: {
      type: String,
      required: [true, "please provide special activity"],
      trim: true
   },
   doctorId: {
      type: ObjectId,
      require: true
   },

   date: {
      type: Date,
      require: [true, "pleasae sent date"]
   },
   paymentStatus:{
      type:String,
      enum:["paid","unpaid"],
      default:"unpaid"
   }

},
   {
      timestamps: true
   })
const Appointment = new mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment 