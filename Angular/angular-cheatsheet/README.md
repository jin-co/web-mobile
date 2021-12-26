# AngularCheatsheet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Command
ng new `fileName` --no-strict -> creating a project 
ng serve [--open] -> starts development server [opensAutomatically]
npm start -> compiles (similar to ng serve)
ng add `dependencyName` -> like 'npm i' (but specific to angular) -> it automatically modifies files(e.g. angular.json) to accommodate added dependencies
ng add @angular/material -> adds angular material
ng g[enerate] c[omponent] `name` [--skip-tests=true] -> generates component [skipTestSpec]
ng build -> create disk folder to upload

## Guide
1. adding styles
npm i `dependency`
- bootstrap
- popper.js
- font-awesome
- jquery
-> go to package.json to check (^ : auto update)
-> go to angular.json and add route: 
    "styles": [
        "src/styles.scss",
        "node_modules/bootstrap/dist/css/bootstrap.css",
        "node_modules/font-awesome/css/font-awesome.css"
    ],
    "scripts": [
        "node_modules/jquery/dist/jquery.js",
        "node_modules/popper.js/dist/umd/popper.js",
        "node_modules/bootstrap/dist/js/bootstrap.js"
    ]

2. adding animation
- npm install --save @angular/animations -> for angular 6: skip this
- import { BrowserAnimationsModule } from '@angular/platform-browser/animations'  (in the AppModule!)
-  import trigger , state , style  etc from @angular/animations  instead of @angular/core

3. Pipe
- transforms the output in the template
- syntax: {{ value | pipe expression[:parameter] | ... }}
- when adding multiple pipes, order matters
- https://angular.io/api?query=pipe
- To create custom pipe
-> create a `name`.pipe.ts file and write a code (or `ng g p`)
-> add `@pipe` decorator
-> open `app.module` 
-> add the file to `decorations`(import it without `.ts` at the end)

4. Route
- to specify routing I can use either 'app.module' or 'app-routing.modules.ts'
- and add <router-outlet></router-outlet> to load
- and use <a routerLink=""> instead of <a href=">
-> routerLink doesn't reload the page so it is much faster and it keeps the current state

5. Directives