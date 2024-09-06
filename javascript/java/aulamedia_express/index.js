const Express= require("express")


const app= Express()
const empresa = require("./router/empresa.router")


const port= 3000


app.use(Express.json())
app.use("/empresa",empresa)

app.get("/",(req,res)=>{
	
	res.send("hello world!")
	
	
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
	
	
})