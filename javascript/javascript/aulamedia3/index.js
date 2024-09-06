const fs = require("fs")
const {soma} = require("./funcao.js")


fs.writeFile("./file/texto.js","teste\n",function(err){
	
	if(err){
		
		return console.log(`um erro durante a escrita: ${err}`)
	}
	
})

console.log(soma(7,7))

fs.readFile("./file/texto.js","utf8",function(err, data){
	
	if(err){
		
		return console.log(`um erro durante a leitura: ${err}`)
	}
	
	console.log(data)
	
})