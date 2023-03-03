const {
    postAppointmentService,
    getAppointmentService,
    deleteAppointmentService,
    ratingUpdateAppointmentService } = require("../service/appointment.service");

module.exports.getAppointment = async (req, res, next) => {
    try {
        const result = await getAppointmentService(req.query.userEmail);
        res.status(200).json({
            result: result
        })
    }
    catch (error) {
        res.status(400).json({
            result: error.message
        })
    }
}
module.exports.postAppointment = async (req, res, next) => {
    try {
   
        const date = new Date(req.body.date);
         const dates = new Date()
         const data =req.body;      
        if (!req.body.date ||date<=dates) { 
            return res.status(400).json({
               error: "invalid date select next 2 day"
            })
        }
        const result = await postAppointmentService(data);
          
            if(result.date!==date){
            
            }
        res.status(200).json({
            error:"successfully added data",
            result: result 
        })
    }
    catch (error) {
        
        res.status(400).json({
            error:error.message
        })
    }
} 
module.exports.ratingUpdateAppointment = async (req, res, next) => {
    try {
        const {id,ratingValue} = req.body;
        const result = await ratingUpdateAppointmentService(id,ratingValue);
        res.status(200).json({
            result: result
        }) 
    }
    catch (error) {
 
        res.status(400).json({
            result: error.message
        })
    }
}
module.exports.deleteAppointment = async (req, res, next) => {
    try {
       
        const result = await deleteAppointmentService(req.params.id);
        res.status(200).json({
            result: result
        }) 
    }
    catch (error) {
        
        res.status(400).json({
            result: error.message
        })
    }
}