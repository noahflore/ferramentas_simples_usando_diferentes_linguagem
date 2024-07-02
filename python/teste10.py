contatos={
	
	'nome':{
		
		'paulo':20202024,
		'rodolfo':69692424,
		'getrudes':10101010
		
		
	}
	
	
}

s=False

while not s:
	
	print("lista de contatos\n")
	
	n=int(input("digite 1 para exibi todos os contatos: \ndigite 2 para adiciona: \ndigite 3 para consulta telefone: \ndigite 4 para remove contato: \ndigite 5 para sair: \n  "))
	
	if n==1:
		
		for chave ,valor in contatos.items():
			
			print(f"{chave} e seu tel: {valor}\n")
			
	elif n==2:
		
		nome=input("digite o nome do novo contato: ")
		if nome in contatos['nome']:
			print("usuário já existe")
			
		else:
			tel=int(input("digite o telefone sem acentuação: "))
			contatos['nome'][nome]=tel
			
	elif n==3:
		
		nome=input("digita o nome do usuário para consulta o telefone: ")
		if nome in contatos['nome']:
			
			print(f"{nome} telefone: {contatos['nome'][nome]}")
			
		else:
			print("esse usuário não existe")
			
			
	elif n==4:
		
		nome=input("digita o nome do usuário a se removido: ")
		
		if nome in contatos['nome']:
			
			del contatos['nome'][nome]
			print("contato removido com sucesso!\n")
			
			
		else:
			print("esse usuário não existe")
			
		
	elif n==5:
		s=True
	else:
		print("valor invalido")