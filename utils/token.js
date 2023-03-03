const jwt = require("jsonwebtoken");

module.exports.generateToken = (user)=>{
    const payload = {email:user.email,name:user.name,status:user.status}
    var token = jwt.sign(payload, process.env.SECRET_JWT_KEY, { expiresIn: '7d' });
    return token;
}