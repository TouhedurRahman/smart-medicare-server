const DoctorCategory = require("../model/doctorCategory.model");

module.exports.getDoctorCategoryService = async()=>{
    const result =await DoctorCategory.find({});
    return result;
  }
  module.exports.postDoctorCategoryService = async(data)=>{
    const result =await DoctorCategory(data).save();
    return result;
  }