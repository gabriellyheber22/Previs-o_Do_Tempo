#Configurações do TypeScript
O typeScript só serve no momento do desenvolvimento do código

1. Inicializar um projeto no node.js
    npm init -y  --> Altomaticamente já da enter em tudo
    ou npm init --> Depois vai dando enter para tudo

2. Instalando o TypeScript no Projeto
    Instalar o TypeScript Global (Dentro do Computador): npm install -g nomeDoPacote
Ex: `npm install -g typescript`
    2.1 Instalação Local (Dentro do Projeto): `npm install typescript` --> Mais recomendado
    2.2 Instalação Local com pacote de desenvolvimento (Só vair servi no momento que o código estiver em desenvolvimento): `npm install -D typescript` --> Mais recomendado

3. Utilizar o TypeScript instalado para transpilar(converter de ts p/ js) o nosso código:
tsc: Arquivo do TypeScript dentro da pasta bin
index.ts: Nome do arquivo typeScript
    3.1 `npx tsc index.ts`
    3.2 Toda vez que for feita alguma mudança no typeScript devera rodar o comando `npx tsc index.ts`
        3.2.1 Fica escutando o arquivo tS e toda vez que  tem alguma modificação é convertido automaticamente:
        `npx tsc index.ts --watch` 
        
        Comando para encerrar no terminal: ctrl+ c

Arquivo de Configuração geral do TypeScritp
`npx tsc --init`
Vai cria um arquivo tsconfig.json

Agora para inicializar os arquivos usa: `npx tsc`