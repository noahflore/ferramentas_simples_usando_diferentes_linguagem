const mongoose = require("mongoose")

const categoriaSchema= new mongoose.Schema({
    nome:{type:String,unique:true,required:true}
})

const categoriaNovo= mongoose.model("categorias",categoriaSchema)

module.exports= categoriaNovo