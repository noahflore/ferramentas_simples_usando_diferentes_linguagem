const Personagem_basico= require("./personagembasico.js")
const prompt = require("prompt-sync")();


class Heroi extends Personagem_basico{

 	 moedas= 5
	tutorial=false//sinaliza que o tutorial está ou não ligado
  	acao= ""//a última ação tomada pelo jogador
	batalhar=false//sinaliza se está no campo de batalha
	comandoEfeito="nenhum"//aplica algum efeito na função comando

	constructor(hp,defesa,forca,fome,nome){
		
		super(hp,defesa,nome)
		this.forca = forca
		this.fome = fome
		
	}


	comando(opcao,valor,motivo){//essa função é chamada na hora da batalha, atráves dela o jogador pode escolher comandos
		
		if(this.comandoEfeito=="nenhum"){//caso o adversário não jogou um ataque especial, essa var habilita o modo normal do comando
			
			if(!this.tutorial || !this.batalhar){//para evita erros essas duas variável verifica se não é o tutorial ou se  o heroi está na batalha
				// isso impede de digita comandos fora do momento certo

				if(!this.tutorial){// esses dois ifs verifica novamente se não está na batalha ou no tutorial, essa segunda verificação reforma a diminuição de erros

					if(!this.batalhar){//se não for nenhum dos dois o laço while é acionado quando o comando digitado não existe

						while(opcao!="comer" && opcao!="não" && opcao!="treinar" && opcao!="atacar" && opcao!="defende" && opcao!="comprar" && opcao!="doar"){


							opcao= prompt("opção invalida digite comer, atacar, defende, treinar, comprar, doar e não: ")//mensagem para ajuda a sabe os comandos
						}


						this.teste(opcao,valor,motivo)//chama a função de teste antes de executa o comando
						this.acao= opcao//o argumento opcao conte o comando digitado pelo jogador e a var acao registra o último comando

					}

				}else if(this.tutorial){//se for tutorial o procedimento é parecido porém alguns comandos são retirados

						while(opcao!="comer" && opcao!="não" && opcao!="treinar"){


							opcao= prompt("opção invalida digite comer, treinar ou não: ")
						}


						this.teste(opcao,valor,motivo)
						this.acao= opcao

				}

				if(this.batalhar){//se for batalha eu resolvi faze esse procedimento em outra função

					this.combate(opcao,valor,motivo)

				}

			}
		
		}else{// se caiu nesse else significa que o adversário congelou seu personagem
			
			console.log(`${this.nome} foi congelado, espera a próxima rodada`)
			
		}
			
		
		
	}

	restaura(){
		
		if(this.fome>=this.hp && this.hp <100){//se a vida do  heroi representado pelo hp for menor do 100 e a fome for maior do que a vida
			//a var diferenca vai recebe a diferença de 100 - a vida restante ai isso vai desconta da fome ou seja para recupera a vida reduzi a fome
			
			let diferenca= 100 - this.hp//pegando a diferença do hp - 100%
			if(diferenca>=this.fome){
				//se a dferença for muito alto então passa tudo da var fome para hp e zera a fome
				this.hp=this.fome
				this.fome=0
			
			}else{
				
				this.fome-=diferenca//retira da fome a diferença
				this.hp=100
				
			}
			
		}
		
		
	}


	combate(opcao,valor,motivo){//essa função é parecido com a função comando contudo voltado para combate
		
		while(opcao!="não" && opcao!="treinar" && opcao!="atacar" && opcao!="defende"){


			opcao= prompt("opção invalida digite atacar, defende, treinar e não: ")
		}


		this.teste(opcao,valor,motivo)
		this.acao= opcao
		
		
		
	}

	teste(opcao,valor,motivo){/*
	
						com argumento opcao é possível sabe qual foi o comando passado no terminal
						o outro argumento valor indica qual foi o aumento ou a diminuição ,exemplo, opcao="comer" valor=10 hp+=valor isso significa que aumentou
						mais 10 de hp
						a var motivo indica se realmente aquele comando pode se usado se retornamos a nosso exemplo, mesmo que o jogador digita comer e o motivo for outro
						então vai aparece a mensagem "(nome do heroi) tentou comer mas nada adiantou"
						*/
		
		if(opcao=="comer"){
			
			this.comer(valor,motivo)
			
		}else if(opcao=="treinar"){
			
			this.treinar(valor,motivo)
			
		}else if(opcao=="atacar"){
			
		this.golpe=	this.ataca()//depois que é chamado a função retorna um valor
			
		}else if(opcao=="defende"){
			
			this.defesa=this.defende()//a mesma coisa ocorre mas no interior é diferente
			
		}else if(opcao=="comprar"){
			
			this.comprar(valor,motivo)
			
		}else if(opcao=="doar"){
			
			this.doar(valor,motivo)
			
		}
		
		
	}


	/*
		tirando a fução atacar e defende, as outras são meio parecido, cada um comparar o argumento motivo com seu critério
		o argumento valor é verifica se é maior ou menor de algum atributo se sim um calculo matemático é feito, caso contraio
		uma mensagem aparece para explica porque não deu certo
		
		!!!DETALHER!!!
		se o argumento motivo está configurado de outro jeito um outro tipo de mensagem é mostrada
	
	
	
	*/


	comprar(valor,motivo){
		
		if(motivo=="comprar"){
			
			if(this.moedas>=valor){

				console.log(`${this.nome} comprou esse ítem`)
				this.moedas-= valor

			}else{

				console.log("saldo insuficiênte")

			}
		
		}else{
			
			console.log(`${this.nome} tenta comprar mas nada adiantou`)
			
		}
		
	}

	doar(valor,motivo){
		
		if(motivo=="doar"){
			
			if(this.moedas>=valor){

				console.log(`${this.nome} doou ${valor} moedas`)
				this.moedas-= valor
			}else if(this.moedas>0){
				
				console.log(`${this.nome} doou ${this.moedas} moedas`)
				this.moedas-= this.moedas
				
			}
			
		}else{
			
			console.log(`${this.nome} tentou doar mas nada adiantou`)
			
		}
		
	}
	comer(valor,motivo){
		
		if(motivo=="comer"){
			
			console.log(`${this.nome} comeu e seu hp e fome atualizou!`)
			this.hp += valor
			this.fome += valor
			
		}else{
			
			console.log(`${this.nome} tentou comer mas nada aconteceu!`)
			
		}
		
	}

	treinar(valor,motivo){
		
		if(motivo=="treinar"){
			
			console.log(`${this.nome} treinou e aumentou mais ${valor} de força`)
			this.forca += valor
			
		}else{
			
			console.log(`${this.nome} tentou treinar mas nada adiantou`)
			
		}
		
	}


	ataca(){
		
		if(this.batalhar){//se a var batalha tiver ativa então ação pode se feita
			
			console.log(`${this.nome} atacou!!! `)//exibi a mensagem que atacou
			return Math.floor(Math.random() * this.forca)//gerar um número aleatório de acordo com a força
			
		}else{
			
			console.log(`${this.nome} não pode atacar fora do campo de batalha`)//caso o jogador tenta atacar fora do campo de batalha
			
			
		}
		
	}


	defende(){
		
		if(this.batalhar){
		
			if(this.forca>0){//aqui a defesa depende da força se a força for maior do que zero é possível se defende

				this.forca -= 10//a força é reduzida de 10 em 10
				console.log(`${this.nome} defendeu!!! e perdeu 10 de força`)//a mensagem é exibida
				return  this.forca// a força é retornada para var defesa
			}else{
	
				//caso não tem força a var defesa recebe 0
				console.log(`${this.nome} defendeu!!! mas está sem força`)
				return  0

			}
			
		}else{
			
			console.log(`${this.nome} não pode defende fora do campo de batalha`)//não pode se defende fora do campo de batalha
			
			
		}
		
		
		
	}

	


	status(){//exibi o status do heroi
		
		console.log("---------------")
		console.log(`- força: ${this.forca}   -`)
		console.log(`- fome: ${this.fome}    -`)
		console.log(`- hp: ${this.hp}      -`)
		console.log(`- moedas: ${this.moedas}   -`)
		console.log("---------------")
		
	}


}






module.exports = Heroi