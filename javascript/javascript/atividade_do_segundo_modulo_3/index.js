const Express= require("express")
const authService= require("./service/authService")
const jwt= require("jsonwebtoken")
const connectToDataBase= require("./database/database")


const app= Express()
const usuario = require("./router/usuarioRouter")


const port= 3000
const segredo='ecvnhsu74d2d93hs6ab'

connectToDataBase();


app.use(Express.json())
app.use("/usuario",usuario)

app.post("/login",async (req,res)=>{

	try{
		const {email, senha}= req.body
		const user= await authService.loginService(email)

		if(!user){
			return res.status(400).send({message:"erro no login ou senha"})
		}

		if(senha != user.senha){
			return res.status(400).send({message:"erro no login ou senha"})
		}

		const token= authService.generateToken(user,segredo)
		res.status(200).send({
			user,
			token
		})
	}catch(err){
		console.log(`erro: ${err}`)
		return res.status(500).send({message:"erro no servidor tente novamente mais tarde."})
	}

	
})

app.get("/teste-token",(req,res)=>{
	const authHeaders= req.headers.authorization

	if(!authHeaders){
		return res.status(401).send({message:"token não foi informado."})
	}

	const parts = authHeaders.split(" ")

	if(parts.length !== 2){
		return res.status(401).send({message:"token invalido!"})
	}

	const [scheme, token] = parts

	if(!/^Bearer$/i.test(scheme)){
		return res.status(401).send({message:"token malformatado!"})
	}

	jwt.verify(token,segredo,async (err,decoded)=>{
		if(err){
			console.log(`erro: ${err}`)
			return res.status(500).send({message:"erro no servidor tente novamente mais tarde"})
		}

		res.send(decoded)
	})
})

app.listen(port,()=>{
	
	console.log(`serviço rodando no http://localhost:${port}`)
	
	
})