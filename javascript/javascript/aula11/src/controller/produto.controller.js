const productService= require("../service/produto.service")

const findByIdProductController= async (req,res)=>{

    try{
        res.send(await productService.findProductByIdService(req.params.id))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tenta novamente mais tarde."})
    }
}

const findAllProductController= async (req,res)=>{

    try{
        res.send(await productService.findProductsAllService())

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tenta novamente mais tarde."})
    }
}

const createProductController= async (req,res)=>{

    try{
        const corpo={
            ...req.body,
            userId: req.userId,
            createdAt: new Date()
        }
        res.send(await productService.createProductService(corpo))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tenta novamente mais tarde."})
    }
}

const updateProductController= async (req,res)=>{

    try{
        return res.send(await productService.updateProductService(req.params.id,req.body))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tenta novamente mais tarde."})
    }
}

const deleteProductController= async (req,res)=>{

    try{
        return res.send(await productService.deleteProductService(req.params.id))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tenta novamente mais tarde."})
    }
}

const addCategoriaProductController= async (req,res)=>{

    try{
        req.body.createdAt= new Date()
        return res.send(await productService.addCategoriaProductService(req.params.id,req.body))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tenta novamente mais tarde."})
    }
}

const removeCategoriaProductController= async (req,res)=>{

    try{
        return res.send(await productService.removeCategoriaProductService(req.params.id,req.body))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tenta novamente mais tarde."})
    }
}

module.exports = {
    findByIdProductController,
    findAllProductController,
    createProductController,
    updateProductController,
    deleteProductController,
    addCategoriaProductController,
    removeCategoriaProductController
}