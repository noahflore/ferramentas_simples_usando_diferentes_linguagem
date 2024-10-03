const Express= require("express")
const connectToDataBase= require("./src/database/database")

const app= Express()
const usuario = require("./src/router/usuario.router")

connectToDataBase()

const port= 3000


app.use(Express.json())
app.use("/usuario",usuario)

app.get("/",(req,res)=>{
	
	res.send("bem-vindo ao marketplace")
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
})