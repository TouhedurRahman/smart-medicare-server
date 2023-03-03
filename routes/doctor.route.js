const express = require("express");
const doctorController = require("../controller/doctor.controller");
const router = express.Router();
//  brand get and update data 
router
  .route("/addDoctor")
  .post(doctorController.postDoctor)
router
  .route("/doctor")
  .get(doctorController.getDoctor)

router
  .route("/doctor/:id")
  .get(doctorController.getDoctorById)
  .patch(doctorController.updateDoctorById)
  .delete(doctorController.cancelDoctorById)
module.exports = router;