const MedicineBrand = require("../model/medicineBrand.model");
module.exports.getMedicineBrandService = async () => {
    const result = await MedicineBrand.find({});
    return result;
}
module.exports.postMedicineBrandService = async (data) => {
    const result = await MedicineBrand(data).save();
    return result;
}

module.exports.medicineBrandServiceById = async (id) => {
    const result = await MedicineBrand.findOne({ _id: id }).populate({ path: "medicine", model: "Medicine" })
    return result;
}
module.exports.deleteMedicineBrandService = async (id) => {
    const result = await MedicineBrand.deleteOne({ _id: id });
    return result;
}
module.exports.updateMedicineBrandService = async (id) => {
    const result = await MedicineBrand.updateOne({ _id: id },);
    return result;
}