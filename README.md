# Backend e Frontend Project

Este repositório contém um backend simples utilizando Node.js, Express e TypeScript, e um frontend estático servido com Live Server.

## Pré-requisitos

Antes de iniciar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão recomendada: 18.x ou superior)
- [npm](https://www.npmjs.com/) para gerenciar dependências
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (para rodar o frontend)

## Instalação

### Backend

1. Clone este repositório:

   ```sh
   git clone https://github.com/seu-usuario/backend.git
   ```

2. Acesse a pasta do backend:

   ```sh
   cd backend
   ```

3. Instale as dependências:

   ```sh
   npm install
   ```

### Frontend

Não é necessário instalar dependências. O frontend pode ser servido diretamente utilizando o Live Server.

## Como Rodar o Projeto

### Backend

Para iniciar o servidor em ambiente de desenvolvimento, execute:

```sh
npm run dev
```

Isso iniciará o servidor com `nodemon`, permitindo a recarga automática ao alterar os arquivos TypeScript.

Caso precise adicionar novas dependências no backend, basta instalar e rodar o comando abaixo para compilar o código TypeScript para JavaScript na pasta `dist/`:

```sh
tsc
```

### Frontend

O frontend é um projeto estático e pode ser servido utilizando o Live Server. Basta abrir o arquivo `index.html` e iniciar o Live Server no VSCode ou outro ambiente compatível.

## Estrutura do Projeto

```
backend/
│── src/
│   ├── index.ts  # Arquivo principal do servidor
│── dist/          # Código compilado em JavaScript
│── package.json  # Configuração do Node.js e scripts
│── tsconfig.json # Configuração do TypeScript

frontend/
│── index.html    # Página principal do frontend
│── script.js     # Arquivo JavaScript do frontend
│── style.css     # Estilos do frontend
```

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework minimalista para backend
- **TypeScript** - Superset do JavaScript para tipagem estática
- **Cors** - Middleware para habilitar CORS
- **Nodemon** - Recarga automática do servidor durante o desenvolvimento
- **Live Server** - Servidor para desenvolvimento frontend

## Considerações

Caso tenha problemas ao rodar o projeto, verifique se todas as dependências foram instaladas corretamente e se o `Node.js` está atualizado.

Se precisar de ajuda, abra uma issue ou entre em contato!

---

💻 Desenvolvido por kauanleandr

projeto produzido por mim para mim