const mongoose= require("mongoose")

const produtoScrema= new mongoose.Schema({
    nome: {type: String, unique:true,required:true},
    descricao: {type: String,required:true},
    precoUnitario: {type:Number,required:true},
    imagem: {type: String,required:true},
    codigoBarra: {type:Number, unique:true,required:true},
    categoria:[
        {
            _id: {type:mongoose.Schema.Types.ObjectId, required:true,ref:"categorias"},
            createdAt: {type:Date,required:true,default:Date.now()}
        }
    ]
})

const produto = mongoose.model("produtos",produtoScrema)

module.exports =  produto