import random
acertou=False

lista=[]
n=0
t=0
vezes=0

for i in range(10):
	
	lista.insert(i,random.randint(1,100))
	
	
n=int(input("jogo de adivinhação ,escolhar um número: "))
while acertou == False:
		
	vezes+=1
			
	for i in range(10):
				
		if n == lista[i]:
			acertou=True
		else:
			t=i
			
				
	if n<lista[t]:
		n=int(input("o número é maior: "))
				
	elif n>lista[t]:
					
		n=int(input("o número é menor: "))
		
		
print("parabéns você acertou o seu números de tentativas foi ",vezes," vezes")
				