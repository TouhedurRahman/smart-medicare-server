const {
    postDoctorCategoryService,
    getDoctorCategoryService,
     } = require("../service/doctorCategory.service")
module.exports.getDoctorCategory = async (req, res, next) => {
    try {
        const result = await getDoctorCategoryService();
        res.status(200).json({
            message:"category find",
            result: result
        })
    }
    catch (error) {  
        res.status(400).json({
            result: error.message
        })
    }
}
module.exports.postDoctorCategory = async (req, res, next) => {
    try { 
          
        const result = await postDoctorCategoryService(req.body);
        res.status(200).json({
            result: result
        })
    }
    catch (error) {
        
        res.status(400).json({
            error: error.message
        })
    }
}