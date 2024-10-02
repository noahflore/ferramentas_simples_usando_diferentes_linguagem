const Usuario= require("../model/usuario.js")

const findByIdUsuario= (id)=>{
    return Usuario.findById(id)
}

const createUsuario= (usuario)=>{
    return Usuario.create(usuario)
}

const updateUsuario= (id,usuario)=>{
    return Usuario.findByIdAndUpdate(id,usuario,{returnDocument:"after"})
}

const deleteUsuario= (id)=>{
    return Usuario.findByIdAndDelete(id)
}

module.exports={
    findByIdUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
}