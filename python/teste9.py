aluno=("joão",6,9,4,5,9)



nome,portugues,matematica,ciencia,arte,ingles=aluno


print("caro aluno(a) ",nome," suas notas\nportugués: ",portugues,"\nmatemática:",matematica,"\nciência:",ciencia,"\nartes:",arte,"\ninglés:",ingles,"\n")
soma=portugues+matematica+ciencia+arte+ingles
media=soma/5
print("a média total é",media)

if media >=6:
	
	print("  parabéns você passou")
	
else:
	print("  infelizmente você reprovou")