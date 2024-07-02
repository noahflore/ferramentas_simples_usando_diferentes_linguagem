def fatorial(valor,fator=0):
	
	
	if fator==0:
		fator=valor
		fator-=1
	else:
		fator-=1

	
	if fator <1:
		return valor

	else:
		
		result=valor*fator

		return  fatorial(result,fator)



valor=int(input("passe um numero para calcular o fatorial: "))
result=fatorial(valor)


print(f'esse é o resultado de {valor} ,seu fatorial é {result}')


