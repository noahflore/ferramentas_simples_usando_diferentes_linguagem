window.onload = function(){
	
	document.getElementById("azul").addEventListener("mouseover",function(){
		
		document.body.style.background = "blue";
	},false);
	
	document.getElementById("vermelho").addEventListener("mouseout",function(){
		
		document.body.style.background = "red";
	},false);
	
	document.getElementById("verde").addEventListener("mouseup",function(){
		
		document.body.style.background = "green";
	},false);
	
};