const usuario= require("../model/usuario")

const findAllService= ()=>{
    return usuario.find()
}

const findByIdService= (id)=>{
    return usuario.findById(id)
}

const createService= (body)=>{
    return usuario.create(body)
}

const updateService= (id,body)=>{
    return usuario.findByIdAndUpdate(id,body,{returnDocument:"after"})
}

const deleteService= (id)=>{
    return usuario.findByIdAndDelete(id)
}

const addAddressService= (id,endereco)=>{

}

const removeAddressService= (id)=>{

}

const addFavProductService= (id,produto)=>{

}

const removeFavProductService= (produto)=>{

}

module.exports={
    findAllService,
    findByIdService,
    createService,
    updateService,
    deleteService,
    addAddressService,
    removeAddressService,
    addFavProductService,
    removeFavProductService
}