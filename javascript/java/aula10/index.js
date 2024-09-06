async function espera(){
	
	const promise = new Promise(resolve =>{
		
		setTimeout(() => resolve(console.log("demonstração")),5000)
		
	})
	
	const esperando = await promise
	console.log("mensagen rápida")
}

espera()