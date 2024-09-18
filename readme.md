# promotech

todo o codigo do promotech mora nesse repositorio, ambiente de homologacao, para producao falar com gabriel

# como usar na maquina local

o projeto utiliza uma api para todas as consultas do frontend, o primeiro passo e fazer essa api funcionar...
o frontend e contruido em typescript + next.js e e totalmente dependente da api

### backend
1. instalar o [python](https://www.python.org/downloads/)

2. clonar o repositorio inteiro na maquina, instalar o [git](https://desktop.github.com/download/) no pc
fazer o login no aplicativo e clicar para adicionar

![Imagem Tutorial](/imagens/1.png)
![Imagem Tutorial 2](/imagens/2.png)

clicar em "clonar" e escolher a repo do promotech
ai abre o vscode e criar um virtual env para as libs do python

3. abrir o terminal do vscode, e entrar na pasta local do backend com ```cd backend``` 

![Imagem Tutorial 2](/imagens/3.png)

4. criar venv com ```py -m venv backend-promotech``` e ativar o venv ```.\backend-promotech\Scripts\activate```

5. instalar as libs do python com ```py -m pip install -r requirements.txt```

6. rodar o app com ```py app.py``` e acessar ```localhost:3000```, se funcionar e pq deu certo 🏖️

### frontend

1. instalar o [node.js](https://nodejs.org/en) caso voce nao tenha

2. entrar na pasta do fronend com ```cd .. && cd frontend```

3. instalar todas as libs com ```npm i```

4. rodar o app com ```npm run dev```

5. acessar ```localhost:5000``` se funcionar e profit

### gabriel e foda o resto e moda