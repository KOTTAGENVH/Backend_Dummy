FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9001

CMD [ "npm", "start" ]

# Path: backend\api-gateway\docker-compose.yml

