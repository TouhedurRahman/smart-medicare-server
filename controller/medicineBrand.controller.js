const { postMedicineBrandService,
    medicineBrandServiceById,
    getMedicineBrandService,
    updateMedicineBrandService,
    deleteMedicineBrandService } = require("../service/medicineBrand.service");
module.exports.getMedicineBrand = async (req, res, next) => {
    try {
        const result = await getMedicineBrandService();
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
module.exports.postMedicineBrand = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await postMedicineBrandService(data);
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {;
        res.status(500).json({
            error: error.message
        }) 
    }
}
module.exports.getMedicineBrandById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await medicineBrandServiceById(id);
         
        res.status(200).json({
            message: "success",
            result: result
        })
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
module.exports.updateMedicineBrand = async (req, res, next) => {
try {
     
    const result = await updateMedicineBrandService(req.body,req.params.id);
    res.status(200).json({
       message: "there is an error",
       data: result
    })
 } catch (error) {
    res.status(200).json({
       message: error.message,
    })
 }
}
module.exports.deleteMedicineBrand = async (req, res, next) => {
    try {
       const {id} = req.params;
        const result = await deleteMedicineBrandService(id);
        res.status(200).json({
            message: "there is an error",
            data: result
        })
    } catch (error) {
        res.status(200).json({
            message: error.message,

        })
    }
}
// it s rules 