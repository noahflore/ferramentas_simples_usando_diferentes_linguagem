const Empresa = require("../model/empresas.model.js")
const mongoose= require("mongoose")


const find = async (req,res) =>{

	try{

		const id = new	mongoose.Types.ObjectId(req.params.id)
		let found = false
		const empresa= await Empresa.findById(id)
		
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
	
	 res.status(201).send(await Empresa.findByIdAndUpdate(id,empresa,{returnDocument:"after"}))
	
	if(!found){
		res.status(404).send({message:"n?o foi encontrado"})
	}
	
	
	
}

const deleteEmpresas = async (req,res)=>{
		const id = req.params.id
	let found = false
	
	res.status(200).send(await Empresa.findByIdAndDelete(id))
	
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