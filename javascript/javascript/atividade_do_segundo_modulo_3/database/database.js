const mongoose= require("mongoose")

function connectToDataBase(){
    /*
     estou usando a versão 4 do mongod para debian linux,
     então caso ocorra erro,substitui o link do monngod por um válido
     */
    mongoose.connect("mongodb://127.0.0.1:27017/teste?compressors=none",{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("mongo conectado")
    }).catch((err)=>{
        return console.log(`erro na conexão ${err}`)
    })
}

module.exports= connectToDataBase