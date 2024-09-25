const usuarioService= require("../service/usuarioService")
const mongoose= require("mongoose")

	function validaEmail(email) {//valida o formato do email
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	  }
	

	function calculaData(dataString) {//calcula a idade mesmo em anos bicesto

		const hoje = new Date();
		const aniversario = new Date(dataString);
		let idade = hoje.getFullYear() - aniversario.getFullYear();
		const m = hoje.getMonth() - aniversario.getMonth();
		
		if (m < 0 || (m === 0 && hoje.getDate() < aniversario.getDate())) {
			idade--;
		}
		
		return idade;
	}
	
	


const find = async (req,res) =>{
	
	try{

        const id = new	mongoose.Types.ObjectId(req.params.id)
		let found = false
		const usuario= await usuarioService.findByIdUsuario(id)
		
		if(usuario!=null){
			found= true
		}
				
		if(!found){
			return res.status(404).send({message:"não foi encontrado"})
		}

		return res.status(200).send(usuario)
    }catch(err){
		console.log(`erro: ${err}`)
		return res.status(500).send("erro no servidor tente novamente mais tarde.")
	}
}

const createUsuarios = async (req,res) =>{//criar um novo usuário
	const usuario = req.body;
	
	
	//todos os ifs abaixo verifica se o atributo do objeto não está vázio ou se o formato é invalido
	if(Object.keys(usuario).length === 0){
		
		return res.status(400).send({message:"usuário vázio."})
		
	}
	
	if(!usuario.nome){//o 'nome' só verifica se não está vázio e é string (optei em deixa o usuário personaliza seu nome)
		
		return res.status(400).send({message:"o campo 'nome' está vázio."})
		
	}else if(typeof(usuario.nome)!="string"){

		return res.status(400).send({message:"o campo 'nome' tem que se string."})

	}
	
	if(!usuario.nascimento){
		
		return res.status(400).send({message:"o campo 'nascimento' está vázio."})
		
	}else if(typeof(usuario.nascimento)!="string"){

		return res.status(400).send({message:"o campo 'nascimento' tem que se String no formato yyyy/mm/dd"})

	}
	//essa const serve apenas para recebe uma data valida caso seja invalida ele retorna uma msg
	const formatoData = new Date(usuario.nascimento)
	if(formatoData == "Invalid Date"){

		return res.status(400).send({message:"o campo 'nascimento' tem que está no formato yyyy/mm/dd"})

	}
	
	if(!usuario.email){
		
		return res.status(400).send({message:"o campo 'email' está vázio."})
		
	}else if(typeof(usuario.email)!="string"){

		return res.status(400).send({message:"o campo 'email' tem que se string."})

	}else if(!validaEmail(usuario.email)){

		return res.status(400).send({message:"o campo 'email' está no formato invalido."})
	}


	if(!usuario.senha){
		
		return res.status(400).send({message:"o campo 'senha' está vázio."})
		
	}else if(typeof(usuario.senha)!="string"){

		return res.status(400).send({message:"o campo 'senha' tem que se string."})

	}
	
	if(!usuario.masculino){
		
		return res.status(400).send({message:"o campo 'masculino' está vázio."})
		
	}else if(typeof(usuario.masculino)!="string"){
		
		return res.status(400).send({message:"o campo 'masculino' tem que se String."})
		
	}else if(usuario.masculino.toUpperCase()!="YES" && usuario.masculino.toUpperCase()!="NO"){

		return res.status(400).send({message:'o campo (masculino) só pode recebe dois valores (yes) ou (no).'})

	}
	//essa linha de baixo padroniza para letras maiúscula
	usuario.masculino= usuario.masculino.toUpperCase()
	//essa outra linha possui uma função 'calculaData' que retorna a idade baseado no nascimento do usuário e a data de hoje
	usuario.ano= calculaData(usuario.nascimento)

    try{
	    res.status(201).send(await  usuarioService.createUsuario(usuario))

    }catch(err){
        console.log(`erro: ${err}`)
		return res.status(500).send("erro no servidor tente novamente mais tarde.")
    }
	
}


const updateUsuarios = async (req,res) =>{//atualiza os dados do usuário pelo id dele
	const id = req.params.id
	const usuario = req.body;
	
	/* aqui também valida os atributos e se estão no formato valido
		o 'id' não será validado porque ele não pode se alterado

		*/
	
	if(Object.keys(usuario).length === 0){
		
		return res.status(400).send({message:"usuário vázio."})
		
	}
	
	if(!usuario.nome){
		
		return res.status(400).send({message:"o campo 'nome' está vázio."})
		
	}else if(typeof(usuario.nome)!="string"){

		return res.status(400).send({message:"o campo 'nome' tem que se string."})

	}
	
	if(!usuario.nascimento){
		
		return res.status(400).send({message:"o campo 'nascimento' está vázio."})
		
	}else if(typeof(usuario.nascimento)!="string"){

		return res.status(400).send({message:"o campo 'nascimento' tem que se String no formato yyyy/mm/dd"})

	}

	const formatoData = new Date(usuario.nascimento)
	if(formatoData == "Invalid Date"){

		return res.status(400).send({message:"o campo 'nascimento' tem que está no formato yyyy/mm/dd"})

	}
	
	if(!usuario.email){
		
		return res.status(400).send({message:"o campo 'email' está vázio."})
		
	}else if(typeof(usuario.email)!="string"){

		return res.status(400).send({message:"o campo 'email' tem que se string."})

	}else if(!validaEmail(usuario.email)){

		return res.status(400).send({message:"o campo 'email' está no formato invalido."})
	}
	
	if(!usuario.senha){
		
		return res.status(400).send({message:"o campo 'senha' está vázio."})
		
	}else if(typeof(usuario.senha)!="string"){

		return res.status(400).send({message:"o campo 'senha' tem que se string."})

	}
	
	if(!usuario.masculino){
		
		return res.status(400).send({message:"o campo 'masculino' está vázio."})
		
	}else if(typeof(usuario.masculino)!="string"){
		
		return res.status(400).send({message:"o campo 'masculino' tem que se String"})
		
	}else if(usuario.masculino.toUpperCase()!="YES" && usuario.masculino.toUpperCase()!="NO"){

		return res.status(400).send({message:'o campo (masculino) só pode recebe dois valores (yes) ou (no)'})

	}
	
	usuario.masculino= usuario.masculino.toUpperCase()
	usuario.ano= calculaData(usuario.nascimento)

	try{
	    res.status(201).send(await  usuarioService.updateUsuario(id,usuario))

    }catch(err){
        console.log(`erro: ${err}`)
		return res.status(500).send("erro no servidor tente novamente mais tarde.")
    }
	
	
}

const deleteUsuarios = async (req,res)=>{
	const id = req.params.id

	try{
		
		const id = new	mongoose.Types.ObjectId(req.params.id)
		let found = false
		const usuario= await usuarioService.findByIdUsuario(id)
		
		if(usuario!=null){
			found= true
		}
				
		if(!found){
			return res.status(404).send({message:"não foi encontrado"})
		}
		
	   	 res.status(201).send(await  usuarioService.deleteUsuario(id))
		

    }catch(err){
        console.log(`erro: ${err}`)
		return res.status(500).send("erro no servidor tente novamente mais tarde.")
    }
	
	
	
}



module.exports = {
	
	find,
	updateUsuarios,
	deleteUsuarios,
	createUsuarios
	
	
}

