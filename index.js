const app = require("./app");
const { dbConnect } = require("./utils/DbCollection");
const env = require("dotenv").config();

dbConnect();

app.get("/", (req, res) => {
    res.send("DB server is running successfully");
});

app.listen(process.env.PORT, () => {
    console.log("server running on port", process.env.PORT);
});