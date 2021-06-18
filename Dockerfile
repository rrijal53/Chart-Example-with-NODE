FROM node:13
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]