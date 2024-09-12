const mongoose=require("mongoose")
const empresaSchema=new mongoose.Schema({
    nome:{type:String,unique:true,required:true},
    numFuncionario:{type:Number,unique:false,required:true}
})

const novaEmpresa=mongoose.model("teste2",empresaSchema)
module.exports = novaEmpresa