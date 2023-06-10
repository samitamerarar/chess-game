FROM node:16-buster-slim
LABEL maintainer="samiarar"

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./ .

RUN npm run heroku-postbuild

COPY ./ .

ENTRYPOINT node server.js
