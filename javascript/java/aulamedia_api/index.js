const Request= require("request")
const Express= require("express")


const app= Express()


const port= 3000


app.use(Express.json())

app.get("/",(req,res)=>{
	const url= req.body.url
	
	Request(url,(error,response,body)=>{
		
		console.log('statusCode:', response && response.body.statusCode)
		
		const pokemon = JSON.parse(body)
		
		res.send(pokemon)
		
		
	})
	
	
	
})

app.listen(port,()=>{
	
	console.log(`servidor rodando no http://localhost:${port}`)
	
	
})