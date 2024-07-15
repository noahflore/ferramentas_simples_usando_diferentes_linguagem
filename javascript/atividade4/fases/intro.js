const prompt = require("prompt-sync")();



module.exports = (heroi)=>{

	//INICIO DA INTRODUÇÃO
	console.log("bem-vindo (força e fé) , esse é um projeto de um jogo interativo.\nonde você passa por aventuras como se fosse um livro mas tu decide o caminho a tomar.\n\n")
	console.log("com determinação e força de vontade, a lenda vai cruzar o seu caminho pre-deteminado mas sabe que passará por desáfios.\npara alcança o objetivo.")
	console.log("preparados para acompanha esse jovem?\n")
	console.log("entrando no tutorial, aqui você vai monta seu personagem e aprende comandos básicos.\n")
	console.log("esse é o(a) jovem heroí(ina), começando sua incrível aventura contra o terrível salazar.")
	const nome= prompt("qual o nome da lenda? ")
	console.clear()

	heroi.nome = nome
	heroi.tutorial=true//o modo tutorial é ativado
		
		
		
			//INICIO DO TUTORIAL
			console.log(`empolgado ${heroi.nome} começa sua jornada, passando no bosque.`)
			console.log("como se pudesse ouvi as trombetas alegremente sobre sua presença.")
			console.log("com sua espada , roupas humilde e alma de guerreiro: anda sem temor.")
			console.log("como se soubesse que aonde iria por mais que não conhece o caminho, será vitorioso.")
			console.log(`${heroi.nome} percebe em seu caminho várias frutas e plantas graciosas.`)
			console.log("lembrou que não havia comido faz alguns dias e como não possui dono aquelas frutas.")
			console.log(`${heroi.nome} devo come-las? `)
			
			
			heroi.status()
			heroi.comando(prompt("digite comer ou não: "),5,"comer")
		
			

			 if(heroi.acao=="não" || heroi.acao=="treinar"){//verifica se o jogador digitou não ou tentou treinar

				console.log(`\n${heroi.nome} por mais que sentia fome optou por não pegar as frutas.`)
				console.log(`mas algum tempo depois ${heroi.nome} avistou numa fogueira apagada e parece abandonada, carne assada em cima de uma pedra. `)
				console.log("oh Deus porque não fui come aquelas frutas? agora me aparece isto.")
				console.log("será que é uma tentação? o que eu devo fazer?")
				 heroi.comando(prompt("comer ou não: "),10,"comer")

			 }
	
			if(heroi.acao=="comer"){
				
				console.log("\n\nveja só algumas moedas no meio da rua, certamente pegarei.")
				
				heroi.moedas+=70
			
			}
				
				console.log(`\nde qualquer forma a decisão foi feita não há tempo para lamentações. disse ${heroi.nome}`)
				
				console.log("esse é o seu status")
				heroi.status()
				
			
			
		
		
		
			
			
		
		
		console.log("andando mais um pouco um rio brilhante em sua vista ,lembras-te que sua força tem que se sempre está forte para as duras batalhas. ")
		console.log(`porém ${heroi.nome} não quer retira suas roupas para nadar e se roubado contudo se não treinar.`)
		console.log("os desáfios serão piores o que fazer? ")
		
		heroi.comando(prompt("digite treinar para treinar ou não: "),10,"treinar")
		
		
			
			
		 if(heroi.acao=="não" || heroi.acao=="comer"){//a mesma coisa por aqui mas agora se tentou comer

			 	console.log(`\n${heroi.nome} não quer molhar suas roupas mas precisa treina então optou em subi um coqueiro.`)
			 	console.log("se eu fazer isso vou passa o dia inteiro nesse pé de coqueiro.")
				 heroi.comando(prompt("degite treinar ou não: "),30,"treinar")

				
			
		}
	
		if(heroi.acao=="treinar"){
			
			console.log("\neu não tinha reparado antes por causa do meu treinamento mas consigo ver algo reluzente como ouro...")
			console.log("moedas?")
			heroi.moedas+=200
			
		}

		console.log("\nbem por hoje já fiz muita coisa ,espero está preparado para aventura.")
		//FIM DA HISTÓRIA, aparti da linha de baixo começa a outra fase
		
		console.log("esse é o seu status")

		heroi.status()
		heroi.tutorial=false
	
		console.log("fim do tutorial.")
		prompt("")//esse prompt em branco serve para o jogador ver o status antes de continua, porque na linha 105 o buffer é apagado
		console.clear()
}
		
		
			
			
		
		
		
		

		
		

		
		




