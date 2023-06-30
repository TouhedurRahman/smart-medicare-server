const mongoose = require("mongoose")

module.exports.dbConnect = () => {
    mongoose
        .connect(process.env.MONGODB_COLLECTION_NAME)
        .then(res => console.log("Database is successfully connected."))
        .catch(error => console.log("error"))
}