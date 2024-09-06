const prompt = require("prompt-sync")();



module.exports = (heroi)=>{
	
	
	//INICIO DA FASE 3
	console.log("realmente esse caminho não foi uma boa opção porém sinto que estou cade vez mais próximo.")
	console.log("a densa floresta deu lugar para um campo pouco mais aberto, algumas frutas era percebido.")
	console.log("nem tudo que reluz é ouro contudo sua fome gritava mais alto e mesmo correndo risco de comer um fruto venenoso.")
	console.log(`${heroi.nome} ficou na tentação,oh Senhor! dei-me um sinal o que farei agora?`)
	if(Math.floor(Math.random() * 100) <50){var valor=-50}else{var valor=50}//foi gerado um valor aleatório para a var valor recebe 50 ou -50
	heroi.comando(prompt("comer ou não: "),valor,"comer")//o mesmo comando mas com o motivo "comer" para o usuário não digita outros comandos
	
	if(heroi.acao=="comer"){
		
		
		if(valor==-50){//se cai nesse if o heroi foi envenenado

			console.log(`\nno primeiro momento ${heroi.nome} não sentia nada todavia seu corpo começou adorece muito rápido.`)
			heroi.hp-=50
			heroi.status()
			if(heroi.hp<=0){return true}//se o heroi morre a função finaliza

		}else{
			
			console.log(`\napós comer aquelas deliciosas frutas ${heroi.nome} sentiu ainda mais forte e revigorante.`)
			heroi.hp+=50
			heroi.status()
			
		}
		
	}
	
	
	console.log(`\ndepois de um tempo sentido essa sensação ${heroi.nome} continuo sua incrível jornada.`)
	console.log("em meio a bonita paisagem ao seu redor ,atentamente observando... percebe-se uma bolsa.")
	console.log("no meio de umas pedras ,aparentemente parece ter algo ali dentro, curioso ficou pensando.")
	
	if(prompt("devo olhar? sim ou não: ") == "sim"){//aqui vai gerar aleatório se é algo bom ou ruim
		
		if(Math.floor(Math.random() * 100) <50){var algo_bom_ruim=false}else{var algo_bom_ruim=true}//a mesma lógica do de cima mas a var algo_bom_ruim recebe true ou false
		
		if(algo_bom_ruim){
			
			console.log("\nnossa! hoje é meu dia de sorte, encontrei 50 moedas; acho que a dona não se importaria.")
			console.log(`se eu acha-la com certeza eu vou a devolve-la, ${heroi.nome} guarda para si.`)
			heroi.moedas+=50//ganha mais moedas
			heroi.status()//exibi status
			
		}else{
			
			console.log(`\naiiii, ${heroi.nome} grita por causa da mordida de uma cobra; isso deve se uma punição.`)
			console.log(`pensou ${heroi.nome}`)
			heroi.hp-=5
			heroi.status()
			if(heroi.hp<=0){return true}//se o heroi morreu o jogo termina
			
			
		}
		
		
	}
	
	prompt("")
	console.log(`\ndepois de todo ocorrído ${heroi.nome} volta a sua trajetória no caminho linear.`)
	console.log("andando mais um pouco o portal surge em sua frente, como se fosse uma premonição.")
	console.log(`${heroi.nome} acabar entrando para ver o que acontece.`)
	
	
	
	
	
	
	
}