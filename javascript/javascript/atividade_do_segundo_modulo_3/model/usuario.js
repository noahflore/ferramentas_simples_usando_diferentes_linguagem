const mongoose=require("mongoose")
const usuarioSchema=new mongoose.Schema({
    nome:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    senha:{type:String,required:true},
    nascimento:{type:String,required:true},
    masculino:{type:String,required:true}
})

const novoUsuario=mongoose.model("user",usuarioSchema)
module.exports = novoUsuario