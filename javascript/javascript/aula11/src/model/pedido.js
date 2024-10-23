const mongoose= require("mongoose")

const pedidoSchema= new mongoose.Schema({
    produtos:[
        {
            _id:{type:mongoose.Schema.Types.ObjectId,required:true,unique:true,ref:"produtos"},
            quantidade:{type:Number,required:true,default:1}
        }
    ],
    createdAt:{type:Date,required:true,default:Date.now()},
    precoTotal:{type:Number,required:true},
    frete:{type:Number,required:true},
    userId:{type:mongoose.Schema.Types.ObjectId,required:true,unique:true,ref:"usuarios"},
    concluido:{type:Boolean,required:true,default:false}
})

const pedidoNovo= mongoose.model("pedidos",pedidoSchema)

module.exports= pedidoNovo