const empresas = [
	
	
	{
		id:1,
		nome:"empresa 1",
		numFuncionario: 100
		
	},
	
	{
		id:2,
		nome:"empresa 2",
		numFuncionario: 1000
		
	},
	
	{
		id:3,
		nome:"empresa 3",
		numFuncionario: 5000
		
	}
	
	
	
	
	]


const find = (req,res) =>{
	const id = req.params.id
	let found = false
	
	
	
	empresas.map((valor)=>{
		
		if(valor.id==id){
			
			found = true
			return	res.send(valor)
			
		}
		
		
		
	})
	
	if(!found){
		res.status(404).send({message:"n?o foi encontrado"})
	}
	
}


const findAllEmpresas = (req,res) =>{
	
	
	res.send(empresas)
	
	
}



const createEmpresas = (req,res) =>{
	const empresa = req.body;
	empresas.push(empresa)
	
	if(Object.keys(empresa).length === 0){
		
		return res.status(400).send({message:"dados vazio"})
		
	}
	
	if(!empresa.id){
		
		return res.status(400).send({message:"o campo 'id' est  v zio"})
		
	}
	
	if(!empresa.nome){
		
		return res.status(400).send({message:"o campo 'nome' est  v zio"})
		
	}
	
	if(!empresa.numFuncionario){
		
		return res.status(400).send({message:"o campo 'numFuncionario' est  v zio"})
		
	}
	
	res.status(201).send(empresas)
	
}

const updateEmpresas = (req,res)=>{
	const id = req.params.id
	const empresa = req.body;
	let found = false
	
	
	
	empresas.push(empresa)
	
	if(Object.keys(empresa).length === 0){
		
		return res.status(400).send({message:"dados vazio"})
		
	}
	
	if(!empresa.id){
		
		return res.status(400).send({message:"o campo 'id' est  v zio"})
		
	}
	
	if(!empresa.nome){
		
		return res.status(400).send({message:"o campo 'nome' est  v zio"})
		
	}
	
	if(!empresa.numFuncionario){
		
		return res.status(400).send({message:"o campo 'numFuncionario' est  v zio"})
		
	}
	
	empresas.map((valor,index)=>{
		
		if(valor.id==id){
			
			empresas[index] = empresa
			found = true
			return	res.send(empresas[index])
			
		}
		
		
		
	})
	
	if(!found){
		res.status(404).send({message:"n?o foi encontrado"})
	}
	
	
	
}

const deleteEmpresas = (req,res)=>{
		const id = req.params.id
	let found = false
	
	
	
	empresas.map((valor,index)=>{
		
		if(valor.id==id){
			
			found = true
			emresas.splice(index,1)
			return	res.send(valor)
			
		}
		
		
		
	})
	
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