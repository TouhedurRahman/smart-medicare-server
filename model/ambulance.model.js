const mongoose = require("mongoose");
const validator = require("validator");
const AmbulanceSchema = mongoose.Schema({
     name:{
        type:String,
        required:[true,"please provide a name"],
        trim:true,
        lowercase:true
     },
     ambulanceNumber:{
      type:String,
      required:[true,"please provide a name"],
      lowercase:true
     },
     img:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
     description:{
        type:String,
        trim:true
     },
     category:{
        type:String,
        required:[true,"please provide special activity"],
        enum:["ac","non-ac"],
        trim:true
     },
     
     contact:{
        type:String,
        required:[true,"please provide driver phone no"],
        validate:[validator.isMobilePhone,"please give a valid mobile phone"],    
     },
     location:{
        type:String,
        required:[true,"please provide fee"],
        trim:true
     },
     serviceCharge:{
      type:Number,
      required:true,
      min:400
     }
},
{
    timestamps:true
})
const Ambulance = new mongoose.model("Ambulance", AmbulanceSchema);
module.exports = Ambulance 