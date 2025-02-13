# 1. Use uma imagem do Node.js
FROM node:22.3.0-alpine

# 2. Defina o diretório de trabalho
WORKDIR /app

# 3. Copie os arquivos de configuração do projeto
COPY package*.json ./

# 4. Instale as dependências
RUN npm install --loglevel=error

# 5. Copie o restante do projeto para o container
COPY . .

# 6. Compile o TypeScript para JavaScript
RUN npm run build

# 7. Exponha a porta (mude se necessário)
EXPOSE 3000

# 8. Comando para iniciar a aplicação
CMD ["npm", "start"]