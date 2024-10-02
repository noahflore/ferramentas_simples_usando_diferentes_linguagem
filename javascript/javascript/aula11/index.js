const Express= require("express")
const connectToDataBase= require("./database/database")

const app= Express()
const usuario = require("./router/usuario.router")

connectToDataBase()

const port= 3000


app.use(Express.json())
app.use("/empresa",usuario)

app.get("/",(req,res)=>{
	
	res.send("bem-vindo ao marketplace")
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
})