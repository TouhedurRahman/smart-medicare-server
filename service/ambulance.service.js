const Ambulance = require("../model/ambulance.model");

module.exports.getAmbulanceService = async (data) => {
     
    const result = await Ambulance.find({});
    return result;
}
module.exports.postAmbulanceService = async (data) => {
   
    const result = await Ambulance(data).save();
    return result;
}