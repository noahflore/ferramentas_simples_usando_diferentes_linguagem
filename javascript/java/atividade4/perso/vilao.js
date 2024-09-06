const Personagem_basico= require("./personagembasico.js")

class Vilao extends Personagem_basico{



	constructor(hp,ataca,defesa,nome){
		
		super(hp,defesa,nome)
		this.ataca= ataca// essa var indica o dano de ataque
		
	}
	
	comando(){
		
		let num = this.aleatorio()//o número aleatório gerado por essa função vai se usado para o vilão escolhe se atacar ou defende
		
		if(num>=50){
			
			this.golpe=	this.atacar()
			
		}else{
			
			this.defesa= this.defende()
			
			
		}
		
		
	}
	
	atacar(){
		
		console.log(`${this.nome} atacou!!!`)
		return this.ataca
		
		
		
	}
	
	defende(){
		
		console.log(`${this.nome} defendeu!!`)
		return Math.floor(Math.random() * 40)//a defesa é aleatória
		
		
		
	}


	aplicaAtaqueEspecial(){
		
		return Math.floor(Math.random() * 100)
		
	}
	
	aleatorio(){
		
		return Math.floor(Math.random() * 100)
		
		
	}
	
	status(){
		
		console.log(`\nhp ${this.nome} - ${this.hp}\n `)
		
	}


}


module.exports = Vilao