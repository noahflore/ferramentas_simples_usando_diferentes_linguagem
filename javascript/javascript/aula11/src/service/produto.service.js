const produto = require("../model/produto")
const Produto= require("../model/produto")

const findProductByIdService= (id) =>{
    return Produto.findById(id)
}

const findProductsAllService= () =>{
    return Produto.find()
}

const createProductService= (body) =>{
    return Produto.create(body)
}

const updateProductService= (id,body)=>{
    return Produto.findByIdAndUpdate(id,body,{returnDocument:"after"})
}

const deleteProductService= (id)=>{
    return Produto.findByIdAndDelete(id)
}

module.exports={
    findProductByIdService,
    findProductsAllService,
    createProductService,
    updateProductService,
    deleteProductService
}