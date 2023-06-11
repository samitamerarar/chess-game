FROM node:16-alpine
LABEL maintainer="samiarar"

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN yarn install

COPY ./ .

ENTRYPOINT yarn start
