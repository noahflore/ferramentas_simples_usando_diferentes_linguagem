nota_aluno=[{'portugues':5,'matematica':5,'ingles':5,'artes':5,'historia':5},{'portugues':8,'matematica':9,'ingles':10,'artes':7,'historia':10}
,{'portugues':1,'matematica':2,'ingles':3,'artes':4,'historia':5}
		   
]

n=0
soma=0
media_ante=0
for aluno in nota_aluno:

	n+=1
	print(f"o aluno {n} tem tais notas {aluno}\n")
	
	soma+=aluno['portugues']
	soma+=aluno['ingles']
	soma+=aluno['matematica']
	soma+=aluno['artes']
	soma+=aluno['historia']
	media=soma/5
	
	print(f'sua média é {media}')
	
	if media>media_ante:
		max_aluno=n
		media_ante=media
		
		
		
	soma=0
	
print(f'\no(a) aluno(a) da maior nota seu índice é {max_aluno}')