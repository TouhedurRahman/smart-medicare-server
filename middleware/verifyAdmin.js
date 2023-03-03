 
module.exports.verifyAdmin = async(req,res,next) =>{
    try{
        if(req.user.status!=="admin"){
            return res.status(401).json({
                status: "user not admin",
                message: "so fail to access this route",
                result: error.message
              })
            }
            next();
    }
    catch(error){
        res.status(403).json({
            status: "invalid user",
            result: error.message
          })
    }
}