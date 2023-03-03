const mongoose = require("mongoose");
const validator = require("validator");
const DoctorCategorySchema = mongoose.Schema({
      
     img:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
     description:{
        type:String,
        required:[true,"please provide some description about itself"],
        trim:true
     },
     category:{
        type:String,
        required:[true,"please provide special activity"],
        trim:true
     },
     subtitle:{
      type:String,
      required:[true,"provide a subtitle"]
     }
     
},
{
    timestamps:true
})
const DoctorCategory = new mongoose.model("DoctorCategory", DoctorCategorySchema);
module.exports = DoctorCategory