const Carro = require("./Veiculo.js")

class Carro extends Veiculo{
	
	constructor(marca,modelo,cor){
		
		super(marca,modelo,cor)
		this.marca = marca
		this.modelo = modelo
		this.cor = cor
		
	}
	
	
}

module.exports = Carro