const prompt = require("prompt-sync")();
const Vilao = require("../perso/vilao.js");


function lutar(heroi){//aqui é parecido com  a fase 1, mais detalhes consulta pela fase 1
	
	const vilao = new Vilao(400,20,50,"salazar")
	heroi.batalhar=true
	
	while(heroi.hp > 0 && vilao.hp > 0){
		
		
		heroi.status()
		heroi.comando(prompt("comando: "),10,"treinar")
		vilao.comando()
	let especial= vilao.aplicaAtaqueEspecial()//aqui o boss aplica seu ataque especial
		vilao.dano(heroi.golpe)
		vilao.status()
		heroi.dano(vilao.golpe)
		vilao.golpe = 0
		heroi.golpe= 0
		
		
		if(especial<8){//se o número aleatório for menor do que 8 , o comandoEfeito é mudado e uma mensagem é exibida
			
			heroi.comandoEfeito="parou"
			console.log(`${heroi.nome} foi congelado por ${vilao.nome}`)
		
		}else{//caso contraio volta ao normal
			
			heroi.comandoEfeito="nenhum"
			
		}
		
	}
	
	heroi.batalhar=false
	if(heroi.hp>0){
		
		console.log(`${vilao.nome} foi derrotado\n`)
	}else{
		
		console.log(`${heroi.nome} foi derrotado\n`)
		
	}
	
	
}



module.exports = (heroi)=>{
	
	//INICIO DA FASE FINAL
	console.log(`\nem questão de segundos ${heroi.nome} está num lugar muito diferente do seu dia a dia.`)
	console.log("o que parece se uma árena com platéria esperando sua chegada, como eles sabem?")
	console.log(`essa e outras perguntas ${heroi.nome} passa a pensa.`)
	console.log(`não há tempo para ${heroi.nome} começa a questiona, surge de dentro do portão.`)
	console.log("aquele que é o motivo de sua viagem; ele mesmo o terrível salazar com sua armadura.")
	console.log("finalmente você chegou, agora vou acabar com essa lenda; disse salazar.")
	console.log(`${heroi.nome}! você não é nada perante a mim, tu pode tentar várias vezes mas o fim é inevitável.`)
	console.log("essa é a decisão final e outros até melhores já passarão por aqui.")
	console.log("prepara-se para mais uma vez se derrotado.")
	
	
	lutar(heroi)//não é necessário retorno porque de qualquer forma o jogo termina
	
	if(heroi.hp>0){//se venceu o status e os créditos finais aparece
		
		console.log(`parabéns ${heroi.nome} você derrotou o terrível salazar, sei que não foi fácil.`)
		console.log("aqui 10 mil de moedas para compensa sua bravura e persistência.")
		heroi.moedas+=10000
		if(heroi.hp<100){heroi.hp=100}
		if(heroi.forca<100){heroi.forca=100}
		if(heroi.fome<100){heroi.fome=100}
		heroi.status()
		
		console.log("esse jogo foi produzido por giovanne.")
	}
	
	
	
}