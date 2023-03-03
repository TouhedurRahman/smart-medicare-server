const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;
const medicineBrandSchema = mongoose.Schema({
    medicine: [{
        type: ObjectId,
        ref: "Medicine"
    }],
    name: {
        type: String,
        required: [true, "please provide a name"],
        trim: true,
        unique:true,
        lowarecase:true
    },
    description: {
        type: String,
        required: [true, "please describe some description"],
        trim: true
    },
    imgRef:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
     brandTitle:{
        type:String,
        required:[true,"please provide a brand sub titile"],
        lowarecase:true
     }
},
    {
        timestamps: true
    })
const MedicineBrand = new mongoose.model("MedicineBrand", medicineBrandSchema);
module.exports = MedicineBrand;