FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=5522

EXPOSE 8080

CMD ["npm", "start"]
