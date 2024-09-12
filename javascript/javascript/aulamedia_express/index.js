const Express= require("express")
const connectToDataBase= require("./database/database")

const app= Express()
const empresa = require("./router/empresa.router")

connectToDataBase()

const port= 3000


app.use(Express.json())
app.use("/empresa",empresa)

app.get("/",(req,res)=>{
	
	res.send("hello world!")
	
	
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
	
	
})