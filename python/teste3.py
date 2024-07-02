jogador_maior=0
jogador_menor=100
i=1

while i <=6:
	
	conte= int(input("digite a idade do jogador de futsal! "))
	print("foram adicionados ",i," jogadores")
	if conte < 18:
		print("você não pode ser menor do que 18 anos! \n")
		continue
	else:
		i= i+1
		
		
		
		if conte > jogador_maior:
			jogador_maior=conte
		if conte < jogador_menor:
			jogador_menor=conte
			
		if i <=6:
			continue
			
		print("o jogador maior idade tem ",jogador_maior," anos e o jogador menor tem ",jogador_menor," anos")