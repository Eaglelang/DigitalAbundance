const jwt = require ('jsonwebtoken')
const config= process.env
const verifyToken= (req, res, next)=>{
    const token = req.body.token||req.query.token||

    if(!token){
        return res.status(200).send('input a token')
    }
}