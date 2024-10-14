const jwt = require("jsonwebtoken")
const {findByIdService}= require("../service/usuario.service")

module.exports= async (req,res,next)=>{
   const authHeaders= req.headers.authorization

    if(!authHeaders){
        return res.status(401).send({message:"o token não foi informado."})
    }

    const parts = authHeaders.split(" ")

    if(parts.length !== 2){
        return res.status(401).send({message:"o token invalido."})
    }

    const {schema , token}= parts

    if(/^Bearer$/i.test(schema)){
        return res.status(401).send({message:"o token malformatado."})
    }

    jwt.verify(token,process.env.SECRETKEY,async (err,decoded)=>{
        if(err){
            return res.status(500).send({message:"o token invalido."})
        }

        const user= findByIdService(decoded.id)

        if(!user || !user.id){
            return res.status(500).send({message:"o token invalido."})
        }

        req.userId= decoded.id

        return next()
    })
}