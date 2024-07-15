const Conta = require("./conta.js")


class ContaCorrente extends Conta{

	constructor(titular,saldo,juros){
		
		super(titular,saldo)
		this.juros = juros
		
	}

	
	valida(){
		
		if(!this.saldo){
			
			throw new Error("saldo vázio , por favor coloca um valor valido")
			
		}else if(typeof(this.saldo) != "number"){
			
			throw new Error("saldo tem que se um número")
			
		}else if(this.saldo <0){
			
			throw new Error("saldo não pode se negativo")
			
		}
		
		if(!this.titular){
			
			throw new Error("titular vázio , por favor coloca um valor valido")
			
		}else if(typeof(this.titular) != "string"){
			
			throw new Error("titular tem que se string")
			
		}
		
		
		if(!this.juros){
			
			throw new Error("juros vázio , por favor coloca um valor valido")
			
		}else if(typeof(this.juros) != "number"){
			
			throw new Error("juros tem que se um número")
			
		}else if(this.juros <0){
			
			throw new Error("juros não pode se negativo")
			
		}
		
		
	}
	
	aplicarJuros(){
		
		this.saldo = this.saldo*this.juros * 12
		
	}



}



module.exports = ContaCorrente