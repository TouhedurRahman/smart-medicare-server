const mongoose = require("mongoose");
const validate = require("validator");
var bcrypt = require('bcryptjs');
const userSchema = mongoose.Schema({
   name:{
    type:String,
    required:[true,"must be a name"],
    minLength:[4,"must be four length"],
    maxLength:[100,"not more than 15 word"],
    trim:true
   },
   email:{
     type:String,
     required:[true,"must be email "],
     unique:true
   },
  //  password:{
  //   type:String,
  //   required:true
  //  },
  //  confirmPassword:{
  //   type:String,
  //   validate:{
  //       validator:function(value){
  //           return value==this.password
  //       },
  //       message:"password is mismatch"
  //   }
  //  },
   status:{
    type:String,
    enum:["admin","user","manager"],
    default:"user"
   },
   gender:{
    type:String,
    enum:["male","female","other"],
    default:"male"
   },
   pic:{
    type:String
   }
},
{
    timestamps:true
})
// userSchema.pre('save',function(next){
//     if(!this.isModified("password")){
//         return;
//     }
//     const hashPassword = bcrypt.hashSync( this.password);
//     this.password=hashPassword;
//     this.confirmPassword=undefined;
//     next()
// })
// userSchema.methods.comparePassword = function(password,hashPassword){
//     const result = bcrypt.compareSync(password,hashPassword);
//     return result;
// }
const User = new mongoose.model("User", userSchema);
module.exports = User