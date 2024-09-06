const prompt = require("prompt-sync")();



const nome = prompt("informe o nome do(a) aluno(a): ")//aqui onde pegar o nome do aluno




//essa função é chamada pelo calcula_media
function ano_letivo(nomeDasMaterias,media,repetiu){
	var faltas = []//vai se utilizado para recebe as faltas individualmente para trabalha com nomeDasMaterias
	var passou = false
	var verdade = true// essa var é apenas usada para o loop while repeti uma vez 
	
	console.log("")
	for (let i=0;i<nomeDasMaterias.length;i++){//dentro desse for as faltas do aluno é passado por aqui
		
		faltas.push(+prompt(`degite a quantidade de faltas da matéria de ${nomeDasMaterias[i]}: `))
					
	}
	
	console.log("")//quebra de linha
	while (verdade){
//esse while verifica se o aluno foi aprovado ou não ,tanto por nota como por falta

			verdade =false
		
		
		
		console.log("\nresumo de todas as matérias\n")//resumo de todas as matérias ,assim se por algum motivo faltou informação pode conssulta aqui
		for (let i=0;i<media.length;i++){

			if (media[i][nomeDasMaterias[i]] >= 6 && faltas[i] <5){
				
				console.log(`parabéns ${nome} você foi aprovado na prova de ${nomeDasMaterias[i]}`)//aqui o aluno foi aprovado na matéria que a var aponta
				
				
			}else if(faltas[i] >5){//foi reprovado por faltas
				
				console.log(`reprovado na matéria ${nomeDasMaterias[i]} por causa das quantidades de faltas que são ${faltas[i]} `)
				
			}else if(media[i][nomeDasMaterias[i]] < 6){//foi reprovado por nota
				
				
				console.log(`reprovado na matéria ${nomeDasMaterias[i]} por causa da média se ${media[i][nomeDasMaterias[i]]} `)
				
			}
			
			
		}
			console.log("")

		for (let i=0;i<media.length;i++){//um loop para varrer a var media que conte as matérias e as notas

			if (media[i][nomeDasMaterias[i]] >= 6 && faltas[i] <5){//checando se a média é maior do que 6 and se as faltas é menor de 5

				passou = true//essa var quando true mostra mensagens passou de ano

			}else if (repetiu == false){//mostra que repetiu em qual matéria , a quantidade de notas e faltas, o argumento repetiu quando true impede de entra em loop porque ambas as funções chama uma a outra

				
				console.log(`o(a) aluno(a) ficou de recuperação na prova de ${nomeDasMaterias[i]}, sua média foi ${media[i][nomeDasMaterias[i]]} e quantidade de faltas é ${faltas[i]} \n encaminhando para o REC... \n`)
				var nota_rec=	calcula_media(true)//chama o calcula_media() para o aluno fazer a recuperação ,IMPORTANTE, o argumento true impede de entra em loop, uma vez que o calcula_media chama essa função ano_letivo
				passou = false
				break//força sai do laço for sem ver outras matérias
				
			}else{//mostra que repetiu em qual matéria sua nota e falta , o uso do break impede a continuação do for
				
				console.log(`o(a) aluno(a) ${nome} repetiu de ano, estude mais na próxima boa sorte`)
				passou = false
				break
				
				
			}
			
			

		}
		
	


}
	
		
		
		if (passou && nota_rec!= ""){//se passou a mensagem será exibida
			
			console.log("\n !!!!!!!!isso ai você passou de ano e te espero no próximo ano!!!!!!!!!")
			
			
		}
		
		
	
	
}

function calcula_media(deNovo){//aqui onde vai se calculado a média
	
	
	var materia = []//vai se guardado o index da matéria
	var qtd_materia = 0//auxilia a indentifica a quantidade matéria
	var nomeDasMaterias= []//também guarda o nome da matéria a diferença vai se usado como argumento da função ano_letivo
	let num_materia=0
	do{
		
		 num_materia = +prompt("calcule a média do aluno(a), é necessário no mínimo 3 matérias, quantas matérias são? ")//armazena quantas matérias tem esse ano
	
		
	}while(typeof(num_materia)=="string" || num_materia<0)//validação
		
	do{
	
		 qtd_materia++
		 materia.push(prompt(`por favor degite o nome da matéria de número ${qtd_materia}: `))
		 nomeDasMaterias.push(materia[qtd_materia-1])//após pega o nome da matéria isso vai se guardado no array
	
	
		
	}while(qtd_materia<num_materia || qtd_materia<3)//valida se são pelo menos 3 matérias
		
		
	let i = 0,pula_materia = 0, notaDaMateria = 0,conte =0
	var listaMateria = [],  notas = new Object()
	
	
	console.log("\né necessário coloca 3 notas")
	while(qtd_materia >0){//esse while permiti coloca as notas por matéria
		
	    notaDaMateria += +prompt(`${conte} - digite a nota da matéria de ${materia[i]}: `)//o dado é passado e somado na var, a var conte só serve para não parece que o programa travou
		notas[materia[i]] = notaDaMateria//aqui é um objeto onde usa outras array é possível armazena a nota no nome, chave e valor
		
		if(typeof(notaDaMateria) !="string" || notaDaMateria >0){
			
			pula_materia++
			conte++
			
		}
		
		if(pula_materia>2){//quando essa variável chegar a maior do que 2 ,começa configura para quando o loop repeti a próxima matéria vai se setada
			
			notas[materia[i]] = notas[materia[i]]/3//aqui a média é feito pelo valor 3 ,exemplo, 6/3
			listaMateria.push(notas)//guarda a nota numa lista
			qtd_materia--//essa var tem que subtrai para o laço while termina quando chega a zero
			i++//é o index para acessa o array
			pula_materia=0//zera o pula_materia para recomeça
			notaDaMateria = 0//zera a soma
			var notas = new Object()//permiti instancia um novo objeto sem precisa troca de nome e quando armazena um novo objeto não modifica o anterior
		}
		
	}
	
	
	
	console.log(`\nessa é a média do(a) aluno(a) ${nome} por matéria `)// a média por matéria
	console.log(listaMateria)
	
	
		
	ano_letivo(nomeDasMaterias,listaMateria,deNovo)//chama o ano_letivo com as informações necessária passada como argumento
		
	
	return listaMateria// retorna a lista de matéria para recuperação 
}



calcula_media(false)//executando o programa