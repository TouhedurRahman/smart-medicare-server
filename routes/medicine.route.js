const express = require("express");
const medicine = require("../controller/medicine.controller");
const { verifyAdmin } = require("../middleware/verifyAdmin");
const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router
  .route("/medicine")
  .get(medicine.getMedicine)
  .post(medicine.postMedicine)

router
  .route("/medicineCount")
  .get(medicine.medicineCount)

router
  .route("/medicine/init/:email")
  .get(medicine.getPaymentMedicine)

router
  .route("/medicine/init")
  .get(medicine.getPaymentMedicine)
  .post(medicine.medicinePayment)

router
  .route("/medicine/init/:id")
  .patch(medicine.updatePaymentMedicine)
router
  .route("/medicine/:id")
  .get(medicine.getMedicineById)
router
  .route("/medicine/:id")
  .delete(medicine.deleteMedicineById)

module.exports = router;