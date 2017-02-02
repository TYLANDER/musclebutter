FROM node:slim

COPY . /musclebutter

WORKDIR /musclebutter

RUN npm install && npm run build

CMD ["node","/musclebutter/server.js"]

