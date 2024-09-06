const prompt = require("prompt-sync")();
const intro= require("./fases/intro.js")
const fase1= require("./fases/fase1.js")
const fase2= require("./fases/fase2.js")
const fase3= require("./fases/fase3.js")
const faseFinal= require("./fases/fasefinal.js")
const Heroi= require("./perso/heroi.js")

var sai=false//essa var é utilizada para sai do loop

do{
	
	const heroi = new Heroi(50,0,50,20,"")//resolvi instância o heroi aqui, assim não vai se necessário fazer isso de novo

	intro(heroi)//chama a introdução + o tutorial
	let f1 = fase1(heroi)// chama a fase 1 e dependendo do retorno dela ,muda a rota do jogo
	


	if(f1){//dentro de cada if uma função que corresponde cada fase é chamada ,dependendo do retorno ou não ,algumas fases são puladas

		let f2 = fase2(heroi)

		if(f2){
			faseFinal(heroi)
			console.log("GAME OVER")

		}else{

			fase3(heroi)
			if(heroi.hp>0){faseFinal(heroi)}//se na fase 3 o heroi morre, esse if não vai deixa continua na fase final
			console.log("GAME OVER")
			
		}


	}else{

		console.log("GAME OVER")

	}

	if(prompt("continua jogando? S para sim ou N para não: ").toUpperCase()=="N"){sai=true}//aqui pergunta se o jogador quer jogar novamente ou não
	
}while(!sai)