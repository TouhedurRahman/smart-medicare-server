const express = require("express");
const bloodController = require("../controller/blood.controller");
const upload = require("../middleware/uploader");

const router = express.Router();
//  brand get and update data 
router
  .route("/blood")
  .get(bloodController.getBlood)
  .post(upload.single("file"), bloodController.postBlood)
router
  .route("/blood/:id")
  .patch(bloodController.updateBlood)


module.exports = router;