compras= float(input("qual o valor das compras? "))

s='s'
valor_pagor=0.0

while s == 's':
	
	if compras<=0:
		compras= float(input("digite o valor a cima de zero: "))
		
	else:
		
		if valor_pagor <compras:
			valor_pagor= float(input("digite o valor a ser pago: "))
			
		else:
			print("o custo foi R$ ",compras," e o valor pago foi R$ ",valor_pagor," seu troco é R$ ",round(valor_pagor-compras,2))
			valor_pagor=0
			compras=0
			s=str(input("próximo cliente? digite S para sim e N para não: "))