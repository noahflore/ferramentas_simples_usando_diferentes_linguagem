const Categoria= require("../model/categoria")

const findCategoriaByIdService= (id)=>{
    return Categoria.findById(id)
}

const findAllCategoriaService= (limit,offset)=>{
    return Categoria.find().limit(limit).skip(offset)
}

const createCategoriaService= (body)=>{
    return Categoria.create(body)
}

const updateCategoriaService= (id,body)=>{
    return Categoria.findByIdAndUpdate(id,body,{returnDocument:"after"})
}

const deleteCategoriaService= (id)=>{
    return Categoria.findByIdAndDelete(id)
}

module.exports={
    findCategoriaByIdService,
    findAllCategoriaService,
    createCategoriaService,
    updateCategoriaService,
    deleteCategoriaService
}