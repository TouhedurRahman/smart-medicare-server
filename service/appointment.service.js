const Appointment = require("../model/appointment.model");
const Doctor = require("../model/doctor.model");

module.exports.getAppointmentService = async (email) => {
	const result = await Appointment.find({ userEmail: email }).sort({ createdAt: -1 });
	return result;
}

module.exports.getAppointmentServiceById = async (id) => {
	const result = await Appointment.findOne({ _id: id });
	return result;
}

module.exports.getPaidAppointmentService = async (data) => {
	const result = await Appointment.find({ paymentStatus: 'paid' }).sort({ createdAt: -1 });
	return result;
}

module.exports.postAppointmentService = async (data) => {
	const trys = await Doctor.updateOne({ _id: data.doctorId }, { $inc: { 'viewCount': 1 } }, { runValidators: true });
	const result = await Appointment.create(data);
	return result;
}

module.exports.ratingUpdateAppointmentService = async (id, ratingValue) => {
	const { rating } = await Doctor.findById(id)
	const value = parseFloat((rating + ratingValue) / 2).toFixed(1);
	const result = await Doctor.updateOne({ _id: id }, { $set: { rating: value } }, { runValidators: true })
	return result;
}

module.exports.deleteAppointmentService = async (id) => {
	const result = await Appointment.deleteOne({ _id: id });
	return result;
}