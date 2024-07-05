window.onload = function(){
	
	const imagens = document.getElementsByClassName("produtoimgs")
	const total = document.getElementById("total")
	const smais = document.getElementsByClassName("smais")
	
	for (let i=0;i<imagens.length;i++){
		
		imagens[i].addEventListener("click",function(){
			
			document.getElementById("imghide").src = imagens[i].src
			total.style.display ="block"
			
				document.getElementById("imghide").addEventListener("mouseout",function(){
			
					document.getElementById("total").style.display = "none"			
			
				})
			
		})
		
		
		
		
	}
	
	for (let i=0;i<smais.length;i++){
		
		smais[i].addEventListener("mouseover",function(){
			
			
			smais[i].style.fontSize ="120%"
			
		})
		
		smais[i].addEventListener("mouseout",function(){
			
			
			smais[i].style.fontSize ="100%"
			
		})
		
	}
};