lista_compras=[]

s=False
while not s:
	
	
	op=int(input("\nesse é o sistema de compras , o que deseja fazer com sua lista?\n digite 1 para adiciona um novo produto\n 2 para exibi a lista\n 3 para remove\n 4 para sai\n"))
	
	if op ==1:
		
		nome=str(input("qual o nome do produto? "))
		lista_compras.append(nome)
		
	elif op==2:
		print("essa é a sua lista ",lista_compras);
		
		
	elif op==3:
		
		nome=str(input("qual produto quer remover ?"))
		existe= nome in lista_compras
		if existe:
			lista_compras.remove(nome)
		
	elif op==4:
		s=True
		
		
print("você saiu do programa!")