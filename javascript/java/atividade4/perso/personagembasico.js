class Personagem_basico{//essa classe está sendo utilizada apenas para herança e muitas de seus métedos vão sofre polimorfismo


	constructor(hp,defesa,nome){
		
		this.hp = hp
		this.defesa= defesa//essa var ganha valor quando na batalha o jogador degita (defende)
		this.nome= nome
		
		
	}
	
	//esses métedos vão sofre polimorfismo
	comando(){
		
		
	}
	
	atacar(){
		
		
		
	}
	
	
	defende(){
		
		
	}
	
	//o métedo dano não precisa de polimorfismo
	dano(valor){//o valor dentro do dano indica o golpe recebido
		
		if(!valor){valor=1}//se o valor for igual a zero ,automaticamente recebe 1
		
		if(this.defesa>0){//a defesa é utilizada para reduzi o impacto do dano
			
			if(valor - this.defesa <0){//se o valor for negativo, significa que o dano é menor do que a defesa ou seja não teve impacto
				
				this.hp -=0
				
				
				
			}else{//caso contraio o dano teve efeito mas a defesa reduziu
				
				this.hp -= (valor - this.defesa)
				
			}
			
			this.defesa= 0//reseta a var
			
		}else{//o jogador não degitou (defende) então o ataque é direto
			
			this.hp -= valor
			
		}
		
	}



}


module.exports = Personagem_basico