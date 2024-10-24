const validaUsuario= (req,res,next)=>{
    
    if(!req.body.nome){
        return res.status(400).send({message:"o campo 'nome' não foi preenchido."})
    }else if(typeof(req.body.nome)!="String"){
        return res.status(400).send({message:"o campo 'nome' tem que se String."})
    }

    if(!req.body.email){
        return res.status(400).send({message:"o campo 'email' não foi preenchido."})

    }else if(typeof(req.body.email)!="String"){
        return res.status(400).send({message:"o campo 'email' tem que se String."})
    }

    if(!req.body.senha){
        return res.status(400).send({message:"o campo 'senha' não foi preenchido."})

    }else if(typeof(req.body.senha)!="String"){
        return res.status(400).send({message:"o campo 'senha' tem que se String."})
    }

    if(!req.body.imagem){
        return res.status(400).send({message:"o campo 'imagem' não foi preenchido."})

    }else if(typeof(req.body.imagem)!="String"){
        return res.status(400).send({message:"o campo 'imagem' tem que se String."})
    }

    return next()
}

module.exports= {
    validaUsuario
}