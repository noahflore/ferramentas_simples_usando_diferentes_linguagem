const Express= require("express")
require("dotenv").config()
const connectToDataBase= require("./src/database/database")

const app= Express()
const usuario = require("./src/router/usuario.router")
const produto = require("./src/router/produto.router")
const categoria = require("./src/router/categoria.router")
const carrinho = require("./src/router/carrinho.router")

connectToDataBase()

const port= 3000


app.use(Express.json())
app.use("/usuario",usuario)
app.use("/produto",produto)
app.use("/categoria",categoria)
app.use("/carrinho",carrinho)

app.get("/",(req,res)=>{
	
	res.send("bem-vindo ao marketplace")
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
})