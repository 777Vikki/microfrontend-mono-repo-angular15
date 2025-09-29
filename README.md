# MonoRepoWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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

## Locally create angular 15
mkdir my-angular18-app && cd my-angular18-app
npm init -y
npm install @angular/cli@15 --save-dev

# Workspace
npx ng new mono-repo-workspace --create-application=false

# Generate Application
npx ng generate application host-app --routing --style=scss
npx ng generate application mfe-app --routing --style=scss

# Run Locally

ng serve project_name (like host-app, mfe-app)
ng serve project_name (like host-app, mfe-app) -o

# Configure Webpack for host-app
ng add @angular-architects/module-federation@15.0.0 --project host-app --port 4200 --type host

# Configure Webpack for remote
ng add @angular-architects/module-federation@15.0.0 --project mfe-app --port 4201 --type remote

# Create Component
ng generate component component_name --project project_name

# Create Module
ng generate component module_name --project project_name
