const {
    postSignUpService,
    postSignInService,
    findUserByEmail,
    userImageUploadService,
    userMakeAdminService
     } = require("../service/user.service");
const { generateToken } = require("../utils/token");
module.exports.postSignUp = async (req, res, next) => {
    try {
       
        const user = await postSignUpService(req.body);
       
        await user.save({validateBeforeSave:false})
        // const token = generateToken(req.body.email)
        res.status(200).json({
            status: "succesfful",
            message: "get user data",
            // token:token
            user:user
          });  
    } 
    catch (error) { 
         
             res.status(501).json({
                message:"unAuthorized",
                error:error.message
             }) 
    }
}
module.exports.postSignIn = async(req,res,next)=>{
    try{
        
        if(!req.body.password|!req.body.email){
            return  res.status(501).json({
                error:"email or password is missing"
             })
        }
        const user = await postSignInService(req.body.email);
         if(!user){
            return  res.status(501).json({
                error:"email not found",
             })
         }
      const isPassword =    user.comparePassword(req.body.password,user.password)
      if(!isPassword){
        return  res.status(501).json({
            error:"password not found"
         })
     }
     const token = generateToken(user);
         res.status(200).json({
            message:"user find",
            token:token
         })
    }

    catch(error){
        res.status(501).json({
           message:"unAuthorized",
           error:error.message
        })
    }
}
module.exports.getMe = async(req,res,next)=>{
    try{
        const email = req.params.id
        const result = await findUserByEmail(email);
         
        res.status(200).json({
            user:result
         })
    }
    catch(error){
           
    }
}
module.exports.getToken = async(req,res,next)=>{
    try{
        const result = await findUserByEmail(req.query.email);
        const token = generateToken(result);
       
        res.status(200).json({
            token
         })
    }
    catch(error){

    }
}
module.exports.postFileUpload = async(req,res) =>{
  try{
    const file = req.file;
    const email = req.body;
    const result = await userImageUploadService(email,file)
    console.log(result);
    res.status(200).json({
        result:"got success",
        result:result
     })
  }
  catch(error){
    res.status(500).json({
        error:error.message
     })
  }
}
module.exports.userMakeAdmin = async(req,res) =>{
  try{
      const {id} = req.params;
       
      const result = await userMakeAdminService(id )
      console.log(result);
      res.status(200).json({
          result:"got success",
          result:result
       })
    }
    catch(error){
      res.status(500).json({
          error:error.message
       })
    }
  }