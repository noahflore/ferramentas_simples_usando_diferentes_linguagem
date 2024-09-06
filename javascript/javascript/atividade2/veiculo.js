
class  Veiculo{
	
	constructor(marca,modelo,cor){
		
	
		this.marca = marca
		this.modelo = modelo
		this.cor = cor
		
	}
	
	valida(){
		
		if(!this.marca){
		   
			throw new Error("var vazia")
		   
		   }
		
	}
	
	padroniza(){
		
		this.marca= this.marca.toString().toUpperCase()
	}
	
}

module.exports = Veiculo