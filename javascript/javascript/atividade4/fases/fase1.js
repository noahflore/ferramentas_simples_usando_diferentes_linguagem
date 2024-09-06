const prompt = require("prompt-sync")();
const Vilao = require("../perso/vilao.js");


function lutar(heroi){//aqui onde acontece a batalha e recebe o heroi como argumento
	
	const vilao = new Vilao(200,8,8,"troll")//o vilão é instaciado
	heroi.batalhar=true//ativa o modo batalha do heroi
	
	while(heroi.hp > 0 && vilao.hp > 0){//compara qual dos dois ainda está com hp acima de zero
		
		
		heroi.status()//exibi o status do heroi
		heroi.comando(prompt("comando: "),10,"treinar")//aqui que é chamado a função comando
		vilao.comando()//o vilão possui seu próprio comando
		vilao.dano(heroi.golpe)//aqui o vilão recebe o golpe atráves da var golpe
		vilao.status()//exibi o sttatus do vilão
		heroi.dano(vilao.golpe)//o heroi recebe o golpe pelo vilão
		//ambos os golpes são resetados
		vilao.golpe = 0
		heroi.golpe= 0
		
		
	}
	
	
	heroi.batalhar=false//heroi sai do modo batalha
	if(heroi.hp>0){//exibi quem venceu o perdeu e retorna true ou false
		
		console.log(`${vilao.nome} foi derrotado\n`)
		heroi.restaura()// a vida do heroi restaura e a fome diminui
		return true
	}else{
			
		console.log(`${heroi.nome} foi derrotado\n`)
		return false
	}
	
	
}

module.exports = (heroi)=>{
	
	//INICIO DA FASE 1
	console.log(`${heroi.nome} retorno para sua jornada , caminhando desprecupadamente.`)
	console.log("acabou ficando desatento e não percebia que estava sendo vigiado.")
	console.log(`${heroi.nome} escuta um barulho ouvindo atrás de ti.`)
	console.log("\nolhou-se em sua volta e nada tinha, quando continuou sua rota.")
	console.log("surge bem na sua frente um troll o qual certamente está querendo brigar.")
	console.log(`${heroi.nome} pensa que é melhor guarda suas forças para momentos certos.`)
	console.log("mas seria uma ótima ídeia lutar agora para ver seus dotes.")
	
	if(prompt("deseja brigar ? sim ou não: ")=="sim"){//verifica e o jogador quer brigar se sim ocorre normalmente
		
		console.log(`\nsabendo da importáncia ${heroi.nome} tirar sua espada e se prepara para lutar.`)
		
		return	lutar(heroi)//essa função retorna true se o heroi vence a luta.
	}else{//se não o jogador perde 5 moedas e depois entra em lutar
		
		console.log(`\nmelhor deixa quieto isso pensou ${heroi.nome} e então pegou suas 5 de moedas.`)
		console.log(`jogou por troll o qual logo guardou para si, ${heroi.nome} voltou ao seu caminho.`)
		heroi.moedas-=5
		heroi.status()
		console.log("mas o mostro não deixo em paz e voltou a pular na frente dele; dizendo você vai brigar querendo ou não.")
		return	lutar(heroi)
		
	}
	
	
	
}