biblioteca={
	
	
	'desespero':{
		
		'barro':{
			'data da obra':'1898'
			
		}
	}
	,
	'cansaço':{
		
		'jubileu':{
			'data da obra':'1600'
			
		}
	}
	,
	'fracasso':{
		
		'barro':{
			'data da obra':'1898'
			
		}
	}
	
	
}
nome="aa"
autor="aa"
print("bem-vinda(o) a biblioteca!\n")
while True:
	
	for nome in biblioteca:
		
		print(f"título: {nome}")
		
		
	n=input("digita o nome do titulo para mais detalhes: ")
	
	
	if n in biblioteca:
		
		nome=n
		autor= biblioteca[nome]
		#obra=biblioteca[nome][autor]
		
		print(f"{nome} do(a) autor(a) {autor}")