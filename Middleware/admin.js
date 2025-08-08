const jwt = require("jsonwebtoken")

module.exports = async (req,res,next) => {
    try {
        const token = req.header("auth-token")
        const user = await jwt.decode(token)
        if(user.role != "admin") return res.status(500).json({errors:true,message:"you are not authorize"})

        next()
        
    } catch (error) {
        return res.status(500).json({errors:true,message:error.message})
    }
}