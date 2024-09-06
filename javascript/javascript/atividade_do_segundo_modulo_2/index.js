const Express= require("express")


const app= Express()
const usuario = require("./router/usuario.router")


const port= 3000


app.use(Express.json())
app.use("/usuario",usuario)

app.get("/",(req,res)=>{//aqui seria uma tela de boas vindas ao usuário onde ele será levado para outras páginas
	
	//a linha de baixo só é um exemplo de cadastro e consulta mas isso não foi implementado porque atividade pede a utilização do 'thunder-client'
	res.send(`olá usuário!\nfaça seu cadastro no <a href='http://localhost:${port}/usuario/cadastro'>cadastra</a> ou consulta seus dados aqui <a href='http://localhost:${port}/usuario/find/'>procura</a>`)
	
	
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
	
	
})