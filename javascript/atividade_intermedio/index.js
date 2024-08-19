const User = require("./class.js")
const fs = require("fs")


//essa var simula um json recebido do banco de dados
var solicitacao = '';
/*
try {
  solicitacao = fs.readFileSync("./file/dados.txt", "utf8");
} catch (err) {
  console.log(`um erro durante a leitura: ${err}`);
}

console.log(solicitacao);*/

//usando o módulo FS para ler dados de um arquivo para a var "solicitacao"
solicitacao= fs.readFileSync("./file/dados.txt","utf8", (err, data) =>{

	
	if(err){
		
		return console.log(`um erro durante a leitura: ${err}`)
	}
	
	return data
	
});


//transformando o json em objeto
const obj = JSON.parse(solicitacao)


//essa parte simula um login e parti disso os métedos vão simula interagindo com o "site"
const user = new User(obj.nome,obj.idade,obj.email,obj.senha)


user.verificar()

//aqui o usuário está interagindo no "site"
user.postaFoto()
user.postaVideo()
user.salvando()

const json= JSON.stringify(user)//convertendo em texto para guarda em banco de dados

fs.writeFile("./file/dados2.txt",json,function(err){//salvando um novo dado
	
	if(err){

		return console.log(`um erro durante a escrita: ${err}`)
	}
	
})