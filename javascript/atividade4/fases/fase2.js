const prompt = require("prompt-sync")();



module.exports = (heroi)=>{
	var forca=0//essa var vai se usado na linha 23
	
	//INICIO DA FASE 2
	console.log(`após uma luta intensa e dias de caminhadas ${heroi.nome} avista ao seu caminho o que parece se um  vilarejo.`)
	console.log("repleto de pessoas e seres mágicos, o que mais chama sua atenção um humanoide com aparênca de rato.")
	console.log("diga meu filho! exclamou ele, o que deseja levar? uma porção por apenas 40 moedas?")
	
	
	heroi.comando(prompt("digite comprar ou não: "),40,"comprar")
	
	if(heroi.acao=="não" || heroi.acao!="comprar"){//verifica tanto se o jogador disse não ou qualquer outra coisa
		
		console.log("\nvocê é esperto meu jovem, gosto de pessoas como tu então te farei um novo acordo.")
		console.log("200 de força se adquiri essa outra porção ,150 moedas e te garanto você não vai acha oferta melhor do que essa.")
		
		heroi.comando(prompt("digite comprar ou não: "),150,"comprar")
		
		if(heroi.acao=="comprar"){forca=200}
		heroi.acao=""//para não gerar erros deixei esse atributo vázio
	}
	
	if(heroi.acao=="comprar"){heroi.hp+=40}//caso o jogador escolheu comprar a primeira porção ele aciona esse if
	if(!forca){heroi.hp+=100}else{heroi.forca+=forca}//se o if da linha 15 não foi satisfeito esse if vai se
	
	heroi.status()
	
	console.log("\nbem acho que isso é tudo meu jovem, não pense que é o fim ,nós iremos encontra em outros momentos; após disse isso.")
	console.log("o vendedor pegar suas coisas e rapidamente sai dali sem deixa rasto.\n")
	console.log(`a jornada tem que continua ${heroi.nome} sai desse mesmo vilarejo e sem rumo siga uma estrada guiada pelo seu coração.`)
	console.log("um mendigo aparece de surpresa e pergunta uma esmolha para forra a barriga meu senhor.")
	heroi.comando(prompt("degite doar ou não: "),10,"doar")
	
		if(heroi.acao=="doar" && heroi.moedas>0){//verifica tanto se dou e se tinha moedas

			console.log("\nse eu fosse você escolheria a via esquerda, meu caro senhor.")
			heroi.status()

		}
	
	console.log("\no mendigo saio sem dizer mais nada e meio pensativo.")
	console.log("ainda continuando sua jornada e relembrando todos os momentos vivido.")
	console.log(`será que ${heroi.nome} tomou todas as escolhas certas?`)
	console.log("não saberemos todavia o destino lhe dará mais oportunidades.")
	console.log(`${heroi.nome} se depara com duas rotas e se questiona qual escolher.`)
	
	if(prompt("digite D para direita E para esquerda: ").toUpperCase() == "E"){//duas rotas alternativas, a primeira leva a fase final e a segunda levar a fase 3
		
		console.log(`\nuau, ${heroi.nome} ficou impressionado em ver um portal surgi do nada e sem pensa duas vezes ${heroi.nome} entra.`)
		return true
	}else{
		
		console.log("\npelo jeito esse caminho ainda tem chão e mais uma vez a floresta começa cobrir o céu.")
		return false
		
		
	}
	
	
	
	
}