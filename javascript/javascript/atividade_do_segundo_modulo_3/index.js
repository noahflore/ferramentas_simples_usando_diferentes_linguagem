const Express= require("express")
const connectToDataBase= require("./database/database")

const app= Express()
const usuario = require("./router/usuarioRouter")

const port= 3000

connectToDataBase();

app.use(Express.json())
app.use("/usuario",usuario)

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
})