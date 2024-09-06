window.onload = function(){
	
	/*
	todo o processo acontece assim que vc aperta o botão
	as variáveis são passadas oss números do formulário e testando se são de fatos números
	depois é calculado o imc e chamado a função criterio_imc
	
	
	
	
	*/
	
	document.getElementById("cal").addEventListener("click", function(){
		
		var altura = document.getElementById("altura").value
		var peso = document.getElementById("peso").value
		
		altura = parseFloat(altura)
		peso = parseInt(peso)
		//alert(altura)
		
		//altura.replace(",",".")
		if (!Number.isInteger(altura) && Number.isInteger(peso) && !Number.isNaN(altura)){
			
			var resultado =  (peso / (altura * altura)).toFixed(2)
		
			document.getElementById("result").value = resultado
			criterio_imc(resultado)
			
		}else{
			
			alert("isso não é um número ")
			
		}
	})
	
	
	
}


function criterio_imc(imc){//essa função compara o imc com os critérios de peso
	
	if(imc<18.5){
		
		document.getElementById("vixi").value = "peso abaixo do ideal IMC"
		
	}else if(imc<24.9){
		
		document.getElementById("vixi").value = "peso na média do ideal IMC"
		
	}else if(imc<29.9){
		
		document.getElementById("vixi").value = "peso acima do ideal IMC"
		
	}else{
		
		document.getElementById("vixi").value = "peso muito elevado do ideal IMC"
		
		
	}
	
	
}