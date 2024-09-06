const Conta = require("./conta.js")


class ContaPoupanca extends Conta{

	constructor(titular,saldo,rendimento){
		
		super(titular,saldo)
		this.rendimento = rendimento
		
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
		
		
		if(!this.rendimento){
			
			throw new Error("redimento vázio , por favor coloca um valor valido")
			
		}else if(typeof(this.rendimento) != "number"){
			
			throw new Error("redimento tem que se um número")
			
		}else if(this.rendimento <0){
			
			throw new Error("redimento não pode se negativo")
			
		}
		
		
	}
	
	aplicaRendimento(valor){
		
		
		this.rendimento= valor
		if(8>=valor){
			
			this.saldo = this.saldo*0.70*12
		}else{
			
			this.saldo = this.saldo*0.06*12
		}
		
	}
	
	
	
	
	
	}



module.exports = ContaPoupanca