const mongoose=require("mongoose")
const usuarioSchema=new mongoose.Schema({
    nome:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    senha:{type:String,required:true},
    imagem:{type:String,required:true},
    enderecos:[
        {
            rua:{type:String,require:true},
            numero:{type:Number,require:true},
            complemento:{type:String},
            cep:{type:String,require:true},
            createdAt:{type:Date,require:true,default:Date.now()},
        }
    ],
    createdAt:{type:Date,require:true,default:Date.now()},
    produtos_fav:[
        {
            _id:{type:mongoose.Schema.Types.ObjectId,require:true,unique:true,ref:"produtos"},
            createdAt:{type:Date,require:true,default:Date.now()}
        }
    ],
    admin:{type:Boolean,require:true,default:false}
})

const novoUsuario=mongoose.model("usuarios",usuarioSchema)
module.exports = novoUsuario