const mongoose= require("mongoose")


function connectToDataBase(){
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