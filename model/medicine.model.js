const mongoose = require("mongoose");
const validator = require("validator");
const {ObjectId} = mongoose.Schema.Types;
const medicineSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "provide a valite name"],
        trim: true,
        unique: [true, "name must be unique"],
        // lowercase: true,
        minLength: [4, "length must be 4 character"],
        maxLength: [100, "length not more than 100 character"]
    },
    description: {
        type: String,
        required: [true, "please describe some description"],
        trim: true
    },
    imgUrl:{
        type:String,
        required:[true,"please provide img url"],
        validate: [validator.isURL, "Please provide a valid url"],
     },
     category:{
        type:String,
        required:[true,"please provide category"],
        trim:true
     },
    price: {
        type: Number, 
        required: true
    },
    brand: {
        name: {
            type: String,
            trim: true,
          required: [true, "Please provide a brand name"],
        },
        id: {
            type: ObjectId,
            ref: 'MedicineBrand'
        }
    }
},
    {
        timestamps: true
    });
//     medicineSchema.pre('save',(next)=>{
//     if(this.quantity==0){
//         this.status="out-of-stock"
//     }
//     next()
// })
const Medicine = new mongoose.model("Medicine", medicineSchema);
module.exports = Medicine 