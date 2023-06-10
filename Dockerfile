FROM node:16-alpine
LABEL maintainer="samiarar"

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY ./ .

ENTRYPOINT npm clean-install && npm run heroku-postbuild && node server.js
