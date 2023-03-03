const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json())
app.use(cors())
app.use("/images", express.static("images"))
app.use(express.urlencoded({ extended: true }))
const review = require("./routes/review.route")
const user = require("./routes/user.route")
const doctor = require("./routes/doctor.route");
const doctorCategory = require("./routes/doctorCategory.route");
const appointment = require("./routes/appointment.route");
const medicine = require("./routes/medicine.route");
const medicineBrand = require("./routes/medicineBrand.route");
const ambulance = require("./routes/ambulance.route");
const blood = require("./routes/blood.route");
const payment = require("./routes/payment.route");
const { verifyToken } = require("./middleware/verifyToken");
const { verifyAdmin } = require("./middleware/verifyAdmin");

app.use('/api/v1', review)
app.use('/api/v1', user)
app.use('/api/v1', doctorCategory)
app.use('/api/v1', doctor)
app.use('/api/v1', appointment)
app.use('/api/v1', medicine)
app.use('/api/v1', medicineBrand)
app.use('/api/v1', blood)
app.use('/api/v1', ambulance)
app.use('/api/v1', payment)

module.exports = app;