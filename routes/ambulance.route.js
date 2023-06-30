const express = require("express");
const ambulance = require("../controller/ambulance.controller");

const router = express.Router();

router
  .route("/ambulance")
  .get(ambulance.getAmbulance)
  .post(ambulance.postAmbulance)

module.exports = router;
