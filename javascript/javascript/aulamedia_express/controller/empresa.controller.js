const empresaService = require("../service/empresa.service")
const mongoose= require("mongoose")


const find = async (req,res) =>{

	try{

		const id = new	mongoose.Types.ObjectId(req.params.id)
		let found = false
		const empresa= await empresaService.findByIdEmpresa(id)
		
		if(empresa!=null){
			found= true
		}
				
		if(!found){
			return res.status(404).send({message:"não foi encontrado"})
		}

		return res.status(200).send(empresa)
	
	}catch(err){
		console.log(`erro: ${err}`)
		return res.status(500).send("erro no servidor tente novamente mais tarde.")
	}
}


const findAllEmpresas = async (req,res) =>{
	
	
	res.send(await  empresaService.findAllEmpresa())
	
	
}



const createEmpresas = async (req,res) =>{
	const empresa = req.body;
	//empresas.push(empresa)
	
	if(Object.keys(empresa).length === 0){
		
		return res.status(400).send({message:"dados vazio"})
		
	}
	
	
	if(!empresa.nome){
		
		return res.status(400).send({message:"o campo 'nome' está vázio"})
		
	}
	
	if(!empresa.numFuncionario){
		
		return res.status(400).send({message:"o campo 'numFuncionario' está vázio"})
		
	}
	
	res.status(201).send(await  empresaService.createEmpresa(empresa))
	
}

const updateEmpresas = async (req,res)=>{
	const id = req.params.id
	const empresa = req.body;
	let found = false
	
	
	if(Object.keys(empresa).length === 0){
		
		return res.status(400).send({message:"dados vazio"})
		
	}
	
	if(!empresa.nome){
		
		return res.status(400).send({message:"o campo 'nome' está vázio"})
		
	}
	
	if(!empresa.numFuncionario){
		
		return res.status(400).send({message:"o campo 'numFuncionario' está vázio"})
		
	}
	
	 res.status(201).send(await empresaService.updateEmpresa(id,empresa))
	
	if(!found){
		res.status(404).send({message:"n?o foi encontrado"})
	}
	
	
	
}

const deleteEmpresas = async (req,res)=>{
		const id = req.params.id
	let found = false
	
	return res.status(200).send(await empresaService.deleteEmpresa(id))
	
	if(!found){
		res.status(404).send({message:"não foi encontrado"})
	}
	
	
}


module.exports = {
	
	find,
	findAllEmpresas,
	updateEmpresas,
	deleteEmpresas,
	createEmpresas
	
	
}