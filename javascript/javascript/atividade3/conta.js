class Conta{
	
	constructor(titular,saldo){
		
		this.titular = titular
		this.saldo = saldo
		
		
	}
	
	valida(){
		
		if(!this.saldo){
			
			throw new Error("saldo vázio , por favor coloca um valor valido")
			
		}else if(typeof(this.saldo) != "float"){
			
			throw new Error("saldo tem que te vingula")
			
		}else if(this.saldo <0){
			
			throw new Error("saldo não pode se negativo")
			
		}
		
		if(!this.titular){
			
			throw new Error("titular vázio , por favor coloca um valor valido")
			
		}else if(typeof(this.titular) != "string"){
			
			throw new Error("titular tem que se string")
			
		}
		
		
	}
	
	padronizar(){
		
		this.titular = this.titular.toString().toUpperCase()
		this.saldo = parseInt(this.saldo.toFixed(2))
		
		
	}
	
	depositar(valor){
		
		if(!valor){
			
			throw new Error("valor está vázio")
			
		}else{
			
			
			if(typeof(valor) == "number"){

				this.saldo += valor

			}else{

				throw new Error("valor tem que se número")

			}
			
			
			
			if(valor<0){
				
				throw new Error("valor não pode se negativo")
				
			}
			
		}
		
	}
	
	sacar(valor){
		
		if(!valor){
			
			throw new Error("valor está vázio")
			
		}else{
			
			
			if(typeof(valor) == "number"){

				if(this.saldo>=valor){
					
					this.saldo -= valor
					
					
				}else{
					
					console.log("\nsaldo insufiente para sacar!\n")
					
				}

			}else{

				throw new Error("valor tem que se número")

			}
			
			
			
			if(valor<0){
				
				throw new Error("valor não pode se negativo")
				
			}
			
		}
		
	}
	
	
}


module.exports = Conta