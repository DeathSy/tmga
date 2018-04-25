FROM node:8.9.4-alpine

WORKDIR /app

COPY dist /app/dist
COPY package.json /app/package.json

CMD [ "yarn", "start" ]
