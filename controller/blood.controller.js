const {
    postBloodService,
    getBloodService,
    updateBloodService
} = require("../service/blood.service");

module.exports.getBlood = async (req, res, next) => {
    try {
        const result = await getBloodService();
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

module.exports.postBlood = async (req, res, next) => {
    try {
        const file = 'http://localhost:5000/' + req?.file?.path;
        const { email, phone, bloodGroup, firstName, lastName, gender, location } = req.body;
        const data = { email: email, phone: phone, bloodGroup: bloodGroup, firstName: firstName, lastName: lastName, gender: gender, location: location, file: file }
        console.log(data);
        const result = await postBloodService(data);
        res.status(200).json({
            message: "successfull ",
            result: result
        })
    }
    catch (error) {
        console.log(error.message);
        res.status(400).json({
            error: error.message
        })
    }
}

module.exports.updateBlood = async (req, res, next) => {
    try {
        const { status } = req.body;

        const result = await updateBloodService(req.params.id, status);
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