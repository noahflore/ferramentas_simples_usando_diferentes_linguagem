const object= require("mongoose").Types.ObjectId

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

const validaPedido= (req,res,next)=>{
    let erros=[]

    if(!req.body.precoTotal){
        erros.push("precoTotal")

    }else if(typeof(req.body.precoTotal)!="number"){
        return res.status(400).send({message:"o campo 'precoTotal' tem que se Number."})
    }

    if(!req.body.frete){
        erros.push("frete")

    }else if(typeof(req.body.frete)!="number"){
        return res.status(400).send({message:"o campo 'frete' tem que se Number."})
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

const validaCarrinho= (req,res,next)=>{
    let erros=[]

    if(!req.body.precoTotal){
        erros.push("precoTotal")

    }else if(typeof(req.body.precoTotal)!="number"){
        return res.status(400).send({message:"o campo 'precoTotal' tem que se Number."})
    }

    if(!req.body.frete){
        erros.push("frete")

    }else if(typeof(req.body.frete)!="number"){
        return res.status(400).send({message:"o campo 'frete' tem que se Number."})
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

const validaId= (req,res,next)=>{
    if(object.isValid(req.params.id)){
        return next()
    }else{
        return res.status(400).send({message:`o ID é invalido.`})
    }
}

const validaLogin= (req,res,next)=>{
    let erros=[]

    if(!req.body.email){
        erros.push("email")

    }else if(typeof(req.body.email)!="string"){
        return res.status(400).send({message:"o campo 'email' tem que se String."})
    }

    if(!req.body.senha){
        erros.push("senha")

    }else if(typeof(req.body.senha)!="string"){
        return res.status(400).send({message:"o campo 'senha' tem que se String."})
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

module.exports= {
    validaUsuario,
    validaProduto,
    validaCategoria,
    validaPedido,
    validaCarrinho,
    validaId,
    validaLogin
}