FROM node:12.17.0-alpine
LABEL maintainer="samiarar"

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN yarn install

COPY ./ .

ENTRYPOINT yarn start
