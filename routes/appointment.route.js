const express = require("express");
const appointmentController = require("../controller/appointment.controller");
 
const router = express.Router();
//  brand get and update data 
router
  .route("/appointment")
  .get(appointmentController.getAppointment)
  .post(appointmentController.postAppointment)
router
  .route("/appointment/:id")
  .delete( appointmentController.deleteAppointment)
  .post( appointmentController.ratingUpdateAppointment)

module.exports = router;