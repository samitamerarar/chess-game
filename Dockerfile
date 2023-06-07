FROM node:16-buster-slim
LABEL maintainer="samiarar"

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./ .

ENTRYPOINT npm run heroku-postbuild && node server.js