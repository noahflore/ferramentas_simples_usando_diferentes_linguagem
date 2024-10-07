const userService= require("../service/usuario.service")

const findByIdUserController= async (req,res)=>{
    try{

        const user= await userService.findByIdService(req.params.id)

        if(!user){
            return res.status(404).send({message:"usuario não encontrado."})
        }

        return res.status(200).send(user)

    }catch(err){

        if(err.kind=="ObjectId"){
            console.log(err.kind=="ObjectId")
            res.status(400).send({message:"erro no ID verifica se foi enviado corretamente."})
        }

        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const findAllUsersController= async (req,res)=>{
    try{

        return res.status(200).send(await userService.findAllService())

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const createUserController= async (req,res)=>{
    try{
        const body= req.body

        if(!body.nome){
            return res.status(400).send({message:"o campo 'nome' está vázio"})
        }

        return res.status(201).send(await userService.createService(body))

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const updateUserController= async (req,res)=>{
    try{
        const body= req.body

        if(!body.nome){
            return res.status(400).send({message:"o campo 'nome' está vázio"})
        }

        return res.status(201).send(await userService.updateService(req.params.id,body))
    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const deleteUserController= async (req,res)=>{
    try{

        const deletedUser= await userService.deleteService(req.params.id)

        if(deletedUser.deletedCount>0){
           return res.status(200).send({message:"usuario deletado com sucesso."})
        }else{
            return res.status(400).send({message:"nenhum usuario foi encontrado."})
        }

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const addAddressController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const addFavProductController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const removeAddressController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const removeFavProductController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}


module.exports= {
    findByIdUserController,
    findAllUsersController,
    createUserController,
    updateUserController,
    deleteUserController,
    addAddressController,
    addFavProductController,
    removeAddressController,
    removeFavProductController
}