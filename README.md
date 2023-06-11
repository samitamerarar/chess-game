# My Chess

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Available

https://chess-game-angular.samiarar.com/

## Deployment

Pushing on the main branch triggers the automatic deployment on the distant server. Building the app using the below command is _required_ before pushing on the main branch. The resource consuming nature of the building process crashes my server if done directly on it. So I can't make use of Gihub Actions for that.

> npm run heroku-postbuild (after an npm install)

This command generates a dist folder that will be used to render the app. It is called heroku because I used to run this app on Heroku and I don't want to change its name :)

Basically, to run the app :

> npm install && npm run heroku-postbuild && node server.js

### Yarn

While deploying with docker, npm install was taking too much time. I switched to Yarn for the same reasons as the building process issues on the cheap server.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Deployment on Heroku

This article helped me for the deployment on Heroku: https://itnext.io/how-to-deploy-angular-application-to-heroku-1d56e09c5147
