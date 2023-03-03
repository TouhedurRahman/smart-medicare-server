const mongoose = require("mongoose");

const oponion = mongoose.Schema({
    name:{
        type:String,
        // require:[true,"please give your name"],
    },
    email:{
        type:String,
        // require:[true,"please give your email"],
    },
    comment: {
        type: String,
        required: [true,"coment please"],
        length: [150, "only 150 letter use there"]
    },
    rating:{
        type:Number,
        required:[true,"must be given rating"]
    }
},
{
    timestamps:true
})
const Review = new mongoose.model("Review", oponion);
module.exports = Review