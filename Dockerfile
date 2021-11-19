FROM node:lts-alpine

ENV NODE_ENV production
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 8086
CMD [ "node", "index.js" ]
