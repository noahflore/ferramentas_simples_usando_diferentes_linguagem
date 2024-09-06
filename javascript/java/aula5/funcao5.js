window.onload = function(){
	
	document.getElementById("cep").addEventListener("focusout",function(){
		
		pesquisa_cep(this.value)
		
		
		
	})
	
	
	
	
}





function limpa_formu(){
	
	
	document.getElementById("rua").value = ("")
	document.getElementById("bairro").value = ("")
	document.getElementById("numero").value = ("")
	document.getElementById("cidade").value = ("")
	document.getElementById("estado").value = ("")
	
	
}

function meu_callback(conteudo){
	
	if (!("erro" in conteudo)){
		
	document.getElementById("rua").value = (conteudo.logradouro)
	document.getElementById("bairro").value = (conteudo.bairro)
	document.getElementById("cidade").value = (conteudo.localidade)
	document.getElementById("estado").value = (conteudo.uf)
		
	}else{
		
		limpa_formu()
		alert("erro a processa os dados")
		
	}
	
	
}

function pesquisa_cep(valor){
	
	//erro corrigido
	var cep = valor.replace(/\D/g, '');//alert(cep)
//	document.getElementById("rua").value = "aaaaaaa"
	if (cep != ''){
		
		var validacep = /^[0-9]{8}$/
		
		if (validacep.test(cep)){
			
				document.getElementById("rua").value = "..."
				document.getElementById("bairro").value = "..."
				document.getElementById("cidade").value = "..."
				document.getElementById("estado").value = "..."
			
			var script = document.createElement("script")
			script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback'
			document.body.appendChild(script)
			
			
		}else{
			
			limpa_formu()
			alert("erro no cep")
			
		}
		
		
	}else{
		
		limpa_formu()
		
	}
	
	
}