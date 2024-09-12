const Empresa = require("../model/empresas.model.js")


const find = async (req,res) =>{
	const id = req.params.id
	let found = false
	
	return res.status(200).send( await Empresa.findById(id))
	
	
	
	if(!found){
		res.status(404).send({message:"não foi encontrado"})
	}
	
}


const findAllEmpresas = async (req,res) =>{
	
	
	res.send(await Empresa.find())
	
	
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
	
	res.status(201).send(await Empresa.create(empresa))
	
}

const updateEmpresas = (req,res)=>{
	const id = req.params.id
	const empresa = req.body;
	let found = false
	
	
	if(Object.keys(empresa).length === 0){
		
		return res.status(400).send({message:"dados vazio"})
		
	}
	
	if(!empresa.id){
		
		return res.status(400).send({message:"o campo 'id' está vázio"})
		
	}
	
	if(!empresa.nome){
		
		return res.status(400).send({message:"o campo 'nome' está vázio"})
		
	}
	
	if(!empresa.numFuncionario){
		
		return res.status(400).send({message:"o campo 'numFuncionario' está vázio"})
		
	}
	
	 res.status(201).send(await Empresa.findByIdAndUpdate(id,empresa,{returnDocument:"alguma coisa"}))
	
	if(!found){
		res.status(404).send({message:"n?o foi encontrado"})
	}
	
	
	
}

const deleteEmpresas = (req,res)=>{
		const id = req.params.id
	let found = false
	
	res.status(200).send(Empresa.findByIdAndDelete(id))
	
	if(!found){
		res.status(404).send({message:"n?o foi encontrado"})
	}
	
	
}


module.exports = {
	
	find,
	findAllEmpresas,
	updateEmpresas,
	deleteEmpresas,
	createEmpresas
	
	
}