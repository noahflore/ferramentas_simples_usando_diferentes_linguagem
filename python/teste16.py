def fribonaci(n,a=1,c=1,para=1):
	
	result = a + c
	a=c
	c=result
	
	if para<=n-2:
		para+=1
	
	if para >= n-2:
		return result
	
	else:
		return f'{a}, ', fribonaci(n,a,c,para)
	
	
	
n=int(input('passe um numero para calcular o fribonacci: '))
result=fribonaci(n)


print(f'essa é a sequencia de {n} -- {result}')