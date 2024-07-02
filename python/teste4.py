alunos = int(input("informe a quantidade de alunos! "))

i=0
notatotal: float=0
media: float=0
while i == 0:
	
	if alunos>0:
		i=1
		
	
	if (alunos <=0 ):{
		alunos := int(input("por favor informe um valor a cima de zero "))
		
	}
		


	
		
			
i=0
			
for i in range(1,alunos+1):
	
	nota= float(input("digite a nota do aluno {}: ".format(i)))
	notatotal+=nota
	

media=notatotal/alunos
		
		
print("a média dos alunos é: ",round(media,2))