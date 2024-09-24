const Express= require("express")


const app= Express()
const usuario = require("./router/usuario.router")


const port= 3000


app.use(Express.json())
app.use("/usuario",usuario)

app.get("/",(req,res)=>{

	
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
	
	
})