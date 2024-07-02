salarioBruto= float(input("qual é seu salario bruto mensal? "))
descontoPrevi=salarioBruto *  0.12
descontoTrans= salarioBruto * 0.06
descontoTotal= descontoPrevi + descontoTrans
salarioLiquido=  salarioBruto - descontoTotal
					
					
print("seu salario líquido é R$",round(salarioLiquido,2)," e o seu desconto total é R$",round(descontoTotal,2))