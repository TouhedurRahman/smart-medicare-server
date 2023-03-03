const express = require("express");
const medicineBrand = require("../controller/medicineBrand.controller");
 
const router = express.Router();
//  brand get and update data 
router
  .route("/medicinebrand")
  .get(medicineBrand.getMedicineBrand)
  .post(medicineBrand.postMedicineBrand)
  router
  .route("/medicinebrand/:id")
  .get(medicineBrand.getMedicineBrandById)
  .get(medicineBrand.updateMedicineBrand)
  .delete(medicineBrand.deleteMedicineBrand)
module.exports = router;