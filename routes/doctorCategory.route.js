const express = require("express");
const doctorCategory = require("../controller/doctorCategory.controller");
const router = express.Router();

router
  .route("/addDoctorCategory")
  .post(doctorCategory.postDoctorCategory)

router
  .route("/doctorCategory")
  .get(doctorCategory.getDoctorCategory)

module.exports = router;