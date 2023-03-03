const {
     postAmbulanceService,
     getAmbulanceService
 } = require("../service/ambulance.service");
 module.exports.getAmbulance = async (req, res, next) => {
    try {
        
        const result = await getAmbulanceService();
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
module.exports.postAmbulance = async (req, res, next) => {
    try {
        const data = req.body;
        
        const result = await postAmbulanceService(data);
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
module.exports.deleteAmbulance = async (req, res, next) => {
    try {
        const data = req.body;
        
        const result = await deleteAmbulanceService(data);
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