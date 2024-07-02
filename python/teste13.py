ordem=int(input("informe o número da ordem de uma matriz: "))
import random
p=0

coluna=[[random.randint(0,10) for i in range(ordem)] for j in range(ordem)]
	#linha.clear()
	
#for i in range(ordem):
print(f'essa é a sua matriz {coluna}\n')


for i in range(ordem):
	
	for j in range(ordem):
		
		if i>=1:
			p+=1
		
		print(f"essa é a ordem diagonal principal {coluna[i][i]}")