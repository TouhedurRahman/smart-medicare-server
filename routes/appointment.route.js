const express = require("express");
const appointmentController = require("../controller/appointment.controller");

const router = express.Router();

router
  .route("/appointment")
  .get(appointmentController.getAppointment)
  .post(appointmentController.postAppointment)

router
  .route("/paidAppointment")
  .get(appointmentController.getPaidAppointment)

router
  .route("/appointment/:id")
  .get(appointmentController.getAppointmentById)
  .delete(appointmentController.deleteAppointment)
  .post(appointmentController.ratingUpdateAppointment)

module.exports = router;