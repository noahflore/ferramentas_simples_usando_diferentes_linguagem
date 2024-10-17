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

const addCategoriaProductService= (id,categoria)=>{
    return Produto.findOneAndUpdate(
        {
            _id:id
        },
        {
            $push:{
                categoria:{
                    _id:categoria._id,
                    createdAt:categoria.createdAt
                }
            }
        },
        {
            rawResult:true
        }
    )
}

const removeCategoriaProductService= (categoria)=>{
    return Produto.findOneAndUpdate(
        {
            _id:categoria.id
        },
        {
            $pull:{
                categoria:{
                    _id:categoria.idCategoria
                }
            }
        },
        {
            rawResult:true
        }
    )
}

module.exports={
    findProductByIdService,
    findProductsAllService,
    createProductService,
    updateProductService,
    deleteProductService,
    addCategoriaProductService,
    removeCategoriaProductService
}