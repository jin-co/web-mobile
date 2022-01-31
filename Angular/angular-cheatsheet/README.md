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

## Updating version
https://www.tektutorialshub.com/angular/angular-how-to-update-to-latest-version/

-- to solve dependency conflict
https://stackoverflow.com/questions/64573177/unable-to-resolve-dependency-tree-error-when-installing-npm-packages

1. Update Node.js: 
- npm update -g
2. Install Angular CLI globally & locally:
- npm install -g @angular/cli@latest   //Global installation
- npm install @angular/cli@latest --save-dev   //local installation

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

4. Route - **to be done**
- to specify routing I can use either 'app.module' or 'app-routing.modules.ts'
- and add <router-outlet></router-outlet> to load
- and use <a routerLink=""> instead of <a href=">
-> routerLink doesn't reload the page so it is much faster and it keeps the current state

5. Directives
- two kinds:
-> attribute
--> looks like a normal HTML attribute
--> only affect/change the element they are added to
- e.g.
--> [ngClass], [ngStyle]
-> structural
--> has a leading *
---> note: `*ngIf=` is the same as `<ng-template [ngIf]=`
--> affects the whole area in the DOM
--> cannot have more than one structural directive on the same element
- e.g.
--> *ngIf *ngFor
- custom directive
-> ng g d `name`
-> good practice is to make a folder for directives created

6. Forms
- template driven: everything is controlled in the template
- For the template-driven approach, you need the directives. You can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive - everything marked with "D" is a directive and can be added to your template.
- Additionally, you might also want to enable HTML5 validation (by default, Angular disables it). You can do so by adding the ngNativeValidate  to a control in your template.
-> add `FormsModule` in imports
-> add `ngModel` to the input that you want to control
-> add `name` to specify the control above 
(e.g. <input name="username">)
-> add `(ngSubmit)` to <form> tag to catch submit event
-> to get the angular created form object
6-1. using ngForm as a parameter
-> add local variable(reference) `#name` to <form> tag 
-> add the local variable as a parameter to `(ngSubmit)` to get hold of the form submitted (but this is not the object created by angular yet)
-> add `ngModel` as a value to the local variable: `#name = ngModel` and this will give the object

6-2. using @ViewChild(element controller by local a reference)
: with this it is possible to control the form even before the submission
-> add `@ViewChild('name', { static: false }) formName!: NgForm;`

- tips
-> visual alert for the invalid values, use classes that is add by ng
-> check the change of attributes
-> set local variable to ngModel or ngModelGroup then use the local variable to show visual warnings

* Check out the Validators class: https://angular.io/api/forms/Validators - these are all built-in validators, though that are the methods which actually get executed (and which you later can add when using the reactive approach).

- reactive form
-> add `ReactiveFormsModule` in imports
-> add `FormsGroup` in the .ts file
-> add <form [formGroup]="signupForm"> in the template: tell angular to use the form created 
-> add `formControlName` to specify the control above 
(e.g. <input formControlName="username"> or <input [formControlName]="'username'">)
-> then set validation in the .ts file in side `FormControl`
* to group fields 
-> create a `FormGroup` with name in .ts file
-> add `formGroupName` to the element that wraps the targeted fields
-> set the value of `formGroupName` with the name above

7. http
[domain.com/posts/1]
-> anatomy of a Http request
- Http verb: POST, GET, ...
- URL (API Endpoint): `/posts/1`
- Headers(Metadata): {"Content-Type": "application/json"}
- Body: {title: "New Post"} *a piece of data sent with Http request (used with `POST/PUT/PATCH` request)
-> add `HttpClientModule` in the imports in app.module to use HTTP request
-> add `HttpClient` as a parameter in the constructor in .ts file
-> then use http.`methodName` to control http request

8. Observable
- npm i rxjs
- npm i rxjs-compat
