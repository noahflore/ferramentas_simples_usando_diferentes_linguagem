const categoriaService= require("../service/categoria.service")

const findCategoriaByIdController= async (req,res)=>{
    
    try{
        return res.send(await categoriaService.findCategoriaByIdService(req.params.id))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const findAllCategoriaController= async (req,res)=>{
    try{
        return res.send(await categoriaService.findAllCategoriaService())

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const createCategoriaController= async (req,res)=>{
    try{
        const corpo={
            ...req.body,
            createdAt: new Date()
        }
        return res.status(201).send(await categoriaService.createCategoriaService(corpo))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const updateCategoriaController= async (req,res)=>{
    try{
        return res.send(await categoriaService.updateCategoriaService(req.params.id,req.body))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const deleteCategoriaController= async (req,res)=>{
    try{
        return res.send(await categoriaService.deleteCategoriaService(req.params.id))

    }catch(err){
        console.log(`erro: ${err}`)
        return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

module.exports={
    findCategoriaByIdController,
    findAllCategoriaController,
    createCategoriaController,
    updateCategoriaController,
    deleteCategoriaController
}