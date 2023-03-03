const mongoose = require("mongoose");
const validator = require("validator");
const doctorSchema = mongoose.Schema({
     name:{
        type:String,
        required:[true,"please provide a name"],
        trim:true
     },
     imgUrl:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
     qualification:{
        type:String,
        required:[true,"please provide qualification"],
        trim:true
     },
     specialist:{
        type:String,
        required:[true,"please provide special activity"],
        trim:true
     },
     chamber:{
        type:String,
        required:[true,"please provide chamber"],
        trim:true
     },
     visitTime:{
      type:String,
       
     },
     bmdcNo:{
        type:String,
        required:[true,"please provide bmdc no"],
        trim:true
     },
     experience:{
        type:String,
        required:[true,"please provide experience"],
        trim:true
     },
     fee:{
        type:String,
        required:[true,"please provide fee"],
     },
     rating:{
      type:Number,
      min:1,
      max:[5,"more than 5 not accepted"],
      default:5
     },
     viewCount:{
      type:Number,
      min:0,
      default:0
     }
},
{
    timestamps:true
})
const Doctor = new mongoose.model("Doctor", doctorSchema);
module.exports = Doctor 