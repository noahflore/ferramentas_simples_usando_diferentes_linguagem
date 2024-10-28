const validaUsuario= (req,res,next)=>{
    
    if(!req.body.nome){
        return res.status(400).send({message:"o campo 'nome' não foi preenchido."})
    }else if(typeof(req.body.nome)!="string"){
        return res.status(400).send({message:"o campo 'nome' tem que se String."})
    }

    if(!req.body.email){
        return res.status(400).send({message:"o campo 'email' não foi preenchido."})

    }else if(typeof(req.body.email)!="string"){
        return res.status(400).send({message:"o campo 'email' tem que se String."})
    }

    if(!req.body.senha){
        return res.status(400).send({message:"o campo 'senha' não foi preenchido."})

    }else if(typeof(req.body.senha)!="string"){
        return res.status(400).send({message:"o campo 'senha' tem que se String."})
    }

    if(!req.body.imagem){
        return res.status(400).send({message:"o campo 'imagem' não foi preenchido."})

    }else if(typeof(req.body.imagem)!="string"){
        return res.status(400).send({message:"o campo 'imagem' tem que se String."})
    }

    return next()
}

const validaProduto= (req,res,next)=>{
    let erros=[]

    if(!req.body.nome){
        erros.push("nome")
    }else if(typeof(req.body.nome)!="string"){
        return res.status(400).send({message:"o campo 'nome' tem que se String."})
    }

    if(!req.body.precoUnitario){
        erros.push("precoUnitario")

    }else if(typeof(req.body.precoUnitario)!="number"){
        return res.status(400).send({message:"o campo 'precoUnitario' tem que se Number."})
    }

    if(!req.body.codigoBarra){
        erros.push("codigoBarra")

    }else if(typeof(req.body.codigoBarra)!="number"){
        return res.status(400).send({message:"o campo 'codigoBarra' tem que se Number."})
    }

    if(!req.body.imagem){
        erros.push("imagem")

    }else if(typeof(req.body.imagem)!="string"){
        return res.status(400).send({message:"o campo 'imagem' tem que se String."})
    }

    if(!req.body.descricao){
        erros.push("descricao")

    }else if(typeof(req.body.descricao)!="string"){
        return res.status(400).send({message:"o campo 'descricao' tem que se String."})
    }

    if(erros.length == 0){
        return next()
    }else{
        if(erros.length>1){
            return res.status(400).send({message:`os campos ${erros} não foram preenchidos.`})
        }else{
            return res.status(400).send({message:`o campo ${erros} não foi preenchido.`})
        }
    }

}

const validaCategoria=(req,res,next)=>{
    if(!req.body.nome){
        return res.status(400).send({message:"o campo 'imagem' não foi preenchido."})
    }

    return next()
}

module.exports= {
    validaUsuario,
    validaProduto,
    validaCategoria
}