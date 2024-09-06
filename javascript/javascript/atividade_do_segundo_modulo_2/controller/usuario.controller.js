const usuarios = [
	
	
	{
		id:1,
		nome:"paulo",
		nascimento: "1984/07/21",
		email:"paulosilva@teste.com",
		senha:"****",
		masculino:"YES"
		
	},
	
	{
		id:2,
		nome:"ana banana",
		nascimento: "2004/03/17",
		email:"bananinha@teste.com",
		senha:"****",
		masculino:"NO"
		
	},
	
	{
		id:3,
		nome:"conde barão augusto oliveira de souza",
		nascimento: "1989/07/26",
		email:"baraooficial@teste.com",
		senha:"****",
		masculino:"YES"
		
	}
	
	
	
	
	]

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
	
	


const find = (req,res) =>{
	const id = req.params.id
	let found = false
	
	
	
	usuarios.map((valor)=>{
		
		if(valor.id==id){
			
			found = true
			valor.ano= calculaData(valor.nascimento)
			return	res.send(valor)
			
		}
		
		
		
	})
	
	if(!found){
		res.status(404).send({message:"não foi encontrado."})
	}
	
}

const createUsuarios = (req,res) =>{//criar um novo usuário
	const usuario = req.body;
	
	usuarios.map((valor)=>{
		/*verifica se o id não existe no array, se existi ele adicionna um novo número 
		automaticamente */

		if(valor.id==usuario.id){

			usuario.id+=1
		}

	})
	
	//todos os ifs abaixo verifica se o atributo do objeto não está vázio ou se o formato é invalido
	if(Object.keys(usuario).length === 0){
		
		return res.status(400).send({message:"usuário vázio."})
		
	}
	
	if(!usuario.id){
		
		return res.status(400).send({message:"o campo 'id' está vázio."})
		
	}else if(typeof(usuario.id)!="number"){

		return res.status(400).send({message:"o campo 'id' tem que se um número do tipo 'Int'."})

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
	usuarios.push(usuario)
	res.status(201).send(usuarios)
	
}


const updateUsuarios = (req,res) =>{//atualiza os dados do usuário pelo id dele
	const id = req.params.id
	const usuario = req.body;
	let found = false
	
	/* aqui também valida os atributos e se estão no formato valido
		o 'id' não será validado porque ele não pode se alterado
		no final dessa função o 'usuario.id' recebe a const 'id'

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
	
	usuarios.map((valor,index)=>{
		
		if(valor.id==id){
			
			usuario.id= id//o id do usuário será mantido
			usuarios[index] = usuario
			found = true
			return	res.send(usuarios[index])
			
		}
		
		
		
	})
	
	if(!found){
		res.status(404).send({message:"não foi encontrado."})
	}
	
	
}

const deleteUsuarios = (req,res)=>{
	const id = req.params.id
	let found = false
	
	
	
	usuarios.map((valor,index)=>{
		
		if(valor.id==id){
			
			found = true
			usuarios.splice(index,1)
			return	res.send(valor)
			
		}
		
		
		
	})
	
	if(!found){
		res.status(404).send({message:"não foi encontrado."})
	}
	
	
}



module.exports = {
	
	find,
	updateUsuarios,
	deleteUsuarios,
	createUsuarios
	
	
}

