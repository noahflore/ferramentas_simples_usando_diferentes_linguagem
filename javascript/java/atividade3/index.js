const Conta = require("./conta.js")
const Contacorrente = require("./contacorrente.js")
const ContaPoupanca = require("./contapoupanca.js")
const prompt = require("prompt-sync")();
//aqui em cima chama todos arquivo.js necessário para essa aplicação

var sai= false//essa var encerra o programa


while(!sai){//todo o processo bancário acontecee nesse loop,detalhe que simulei passagem de meses, tipo como se o usuário entra na agéncia de ano a ano
	
	do{//aqui onde o usuário cria ou sua conta corrente ou poupança
		
		var tipoConta= prompt("abre sua conta bancária! qual tipo de conta quer abrir? , digite Cc para conta corrente ou Cp para conta poupança: ")
		
		if(tipoConta != "Cc" && tipoConta != "Cp"){//caso o usuário errou a digitação
			
			console.log("por favor ,coloca apenas Cc ou Cp\n")
			
		}
		
		}while(tipoConta != "Cc" && tipoConta != "Cp")//aqui acontece a validação de qual tipo de conta criar
			
		
				
				if(tipoConta == "Cc"){//utilizo esse if para separa a conta corrente e a poupança
					
					var titula= prompt("degite o nome titula da Cc: ")//pegar o nome
					var saldo= +prompt("degite o saldo da Cc, aviso uma vez depositado aguarde 12 meses para consulta: ")//passa o saldo inicial
					var juros= +prompt("qual a taxa de juros disponível você prefere? 0.10% , 0.15% ou 0.30%: ")//quais taxas de juros escolhe
					
					}else{
						
						var titula= prompt("degite o nome titula da Cp: ")//pegar o nome
						var saldo= +prompt("degite o saldo da Cp, aviso uma vez depositado aguarde 12 meses para consulta: ")
						console.log("o rendimento é baseado na taxa selic que varia 70% a 6.17% se o rendimento for menor do que 8 o lucro é 70% e se for maior o lucro é 6% ")//em vez do usuário escolhe a taxa o valor é aleatório
						
						}
				
				
				if(tipoConta == "Cc"){
				
					while(juros!= 0.10 && juros!= 0.15 && juros!= 0.30){//uma validação de qual taxa de juros pode coloca


						   juros= +prompt("coloca um valor válido sem a porcentagem ,exemplo, 0.10,0.15 e 0.30: ")



					}
					var novaConta = new Contacorrente(titula,saldo,juros)//uma nova conta é criada
				}else{
					var novaConta = new ContaPoupanca(titula,saldo,Math.floor(Math.random() * 100))//eu utilizei um valor aleátorio para simula o selic se for abaixo de 8 o rendimento é 70% se for maior de que 8 o lucro é 6%
					
					
				}
				
				
				
				novaConta.valida()//verifica se os dados estão corretos
				novaConta.padronizar()//padroniza os dados
				
				let saiDaAgencia=false,esperando=false
				do{//esse loop simula agência que o usuário usa
					
					if(tipoConta == "Cc"){
						
						
						if(esperando== true){//aqui o usuário saio da agência e voltou em 12 meses


							console.log("\n12 meses se passaram..., bem-vinda(a) de volta")
							novaConta.aplicarJuros()//aplica juros anualmente
							console.log(novaConta)//exibi a conta
							esperando=false

						}
						
						
						
					}else{
						
						if(esperando== true){//aqui o usuário saio da agência e voltou em 12 meses


							console.log("\n12 meses se passaram..., bem-vinda(a) de volta")
							novaConta.aplicaRendimento(Math.floor(Math.random() * 100))//novamente colocando um valor aleatório de 0 a 100
							console.log(novaConta)//exibi a conta
							esperando=false

						}
						
						
					}
						console.log(" \no que deseja fazer?\nconsulta conta tecle 1:\nfazer deposito tecle 2:\nrealiza saque tecle 3:\nfechar agência tecle 4:\nsai e volta daqui um ano tecle 5:\n")
					let operador= +prompt("")//com valor pegado do terminal as opções  pode se usada
					
					
					
					if(operador==1){//consulta a conta
						
						console.log(novaConta)
						
						
					}else if(operador==2){//realiza o deposito com os métedos do objeto
						
						
						let valor = +prompt("quanto deseja depositar: ")
						
						
						 novaConta.depositar(valor)//aqui onde é aplicada o deposito
				   		 console.log(novaConta)
						
						
					}else if(operador==3){//realiza o saque
						
						
						let valor = +prompt("quanto deseja sacar: ")
						
						
						 novaConta.sacar(valor)//cada métedo valida se os dados estão correto e faz aplicação
				   		 console.log(novaConta)
						
					}else if(operador==4){//sai da agência
						
						 saiDaAgencia=true
						
					}else if(operador==5){//espera 12 meses para volta agência
						
						 esperando= true
						
					}else{//caso o usuário digitou errado
						
						console.log("operação invalida")
						
					}
					
					
				}while(!saiDaAgencia)//repeti o loop
					
					
					
				
	
	
	
	
				let criaConta=""//essa var armazena a resposta caso o usuário queira criar uma nova conta
				
				while(criaConta==""){//verifica se o usuário quer criar uma nova conta, se sim sua antiga conta será excluída

					criaConta= prompt("deseja criar uma nova conta? se sim sua conta antiga será excluída ")
					
					if(criaConta!="sim" && criaConta!="não"){//valida se a resposta foi sim ou não
						
						criaConta=""
						console.log("\ndegite sim ou não")
					}else if(criaConta=="não"){
						
						sai=true
						
						
					}
					
					
				}
	
	
	
	
}