const prompt = require("prompt-sync")();
var media = 0
var recuperacao = 0


function calcula_media(){
	
	let notas = []
	var soma = 0
	
	var qtd_nota = prompt("calcule a média do aluno(a), quantas matérias o(a) aluno(a) tem esse ano ? ")
	
	for (let i=0;i<qtd_nota;i++){
		
		let nota= prompt(`qual é valor da nota de número ${i+1}: `)
		notas.push(nota)
		
		
	}
	console.log(` esses são os valores por matéria desse aluno, ${notas} \n`)
	
	for (let i=0;i<qtd_nota;i++){
		
		soma += parseInt(notas[i])
	
	}
	
	console.log(`essa é sua média ${soma/qtd_nota}\n`)
	
	return  soma/qtd_nota
	
}

var verdade = true

while (verdade){
	
	if (recuperacao == 0){
	
		media = calcula_media()
		
	}else{
		
		media = calcula_media()
		verdade =false
		
	}
	
	//console.log(media)
	if (parseInt(media) > 6){
		
		console.log("parabéns você foi aprovado")
		verdade = false
		
	}else if(verdade){
		
		console.log("você ficou de recuperação, encaminhando para o REC... \n")
		recuperacao = 1
		
	}else{
		
		console.log("você repetiu de ano, estude mais")
		
	}
	
	
}