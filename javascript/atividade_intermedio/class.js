class Pessoa{//class pai

	constructor(nome, idade){
	
		this.nome = nome
		this.idade = idade
		
		
		}





}


class Usuario extends Pessoa{
	
	
	constructor(nome, idade, email, senha){
		super(nome, idade)
		this.email = email
		this.senha = senha
		
		
	}
	
	salvando(){//aqui simula salvando os dados ante deslonga, nesse exemplo o usuário fez aniversário e trocou o nome
		
		this.nome += " Flores"
		this.idade += 1
		
	}
	
	
	postaFoto(){
		
		console.log("você postou uma nova foto")
		
		
	}
	
	
	postaVideo(){
		
		console.log("você postou um novo vídeo")
		
		
	}
	
	verificar(){//verificar se os dados pego são os mesmo que usuário preencheu
		
		if(this.nome.toUpperCase() == "NOAH" && parseInt(this.idade) == 26 && String(this.email) == "teste@teste.com" && String(this.senha) == "****"){
			
			console.log("login com sucesso!")
			
			
		}else{
			
			console.log("erro no login")
			
			
		}
		
		
	}
	
	
}

module.exports = Usuario