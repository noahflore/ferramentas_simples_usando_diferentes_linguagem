const Usuario= require("../model/usuario")
const jwt= require("jsonwebtoken")

const loginService= (email)=> Usuario.findOne({email})
const generateToken= (user,segredo)=> jwt.sign({user},segredo,{expiresIn:87000})

module.exports={
    loginService,
    generateToken
}