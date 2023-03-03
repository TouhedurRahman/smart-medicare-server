const app = require("./app");
const { dbConnect } = require("./utils/DbCollection");
const env = require("dotenv").config();
dbConnect()
app.get("/",(req,res)=>{
    res.send("i am work")
})
app.listen(process.env.PORT, () => {
    console.log("server running on port",process.env.PORT);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
})  