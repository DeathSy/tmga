FROM node:8.9.4-alpine

WORKDIR /app

COPY .next /app/.next
COPY static /app/static
COPY node_modules /app/node_modules
COPY package.json /app/package.json
COPY server.js /app/server.js

CMD [ "yarn", "start" ]
