const express = require("express");
const ambulance = require("../controller/ambulance.controller");

const router = express.Router();

router
  .route("/ambulance")
  .get(ambulance.getAmbulance)
  .post(ambulance.postAmbulance)
// router
//   .route("/medicine/:id")
//   .get( verifyToken, medicine.getMedicineById)

module.exports = router;   