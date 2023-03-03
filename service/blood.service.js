const Blood = require("../model/blood.model")

module.exports.getBloodService = async ()=>{
   return await Blood.find()
}
module.exports.postBloodService=async(data)=>{
    return await Blood.create(data)
}
module.exports.updateBloodService =async (id,value)=>{
    return await Blood.updateOne({ _id: id }, { $set: { status: value } }, { runValidators: true })
}
