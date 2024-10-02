
const findByIdUserController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const findAllUsersController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const createUserController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const updateUserController= async (req,res)=>{
    try{

    }catch(err){
        console.log(`erro: ${err.message}`)
       return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
    }
}

const deleteUserController= async (req,res)=>{
    try{

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