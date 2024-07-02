def calcula():
	
	print('calculadora\n')
	ope=input('coloca o sinal da operação: ')

	
	
	if ope=='+':
		a=int(input('coloca o primeiro valor: '))
		b=int(input('coloca o segundo valor: '))
		return a + b
	elif ope=='-':
		a=int(input('coloca o primeiro valor: '))
		b=int(input('coloca o segundo valor: '))
		return a-b
	elif ope=='X' or ope=='x':
		a=int(input('coloca o primeiro valor: '))
		b=int(input('coloca o segundo valor: '))
		return a*b
	elif ope=='/':
		a=int(input('coloca o primeiro valor: '))
		b=int(input('coloca o segundo valor: '))
		return a/b
	else:
		ope=input('operador invalido, tente novamente: ')
	

	
resul=calcula()


print(resul)