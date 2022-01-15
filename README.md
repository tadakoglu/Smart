# SmartTayfun

## Showcase Video

![alt text](https://github.com/tadakoglu/Smart/blob/main/smart.png)
https://www.loom.com/share/7354279c8a6e4ef28a87717c8a7b3053

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.


## Important Aspects
### I used NGRX to store front-end data effectively
### I used HttpClient to get JSON content from files instead of third party packages.
### I used OnPush Change Detection in every component to boost performance and used immutable variables everywhere.
### I have used MapComponent only once in HomeComponent to render the map only once to increase rendering performance, and put other components as children through router-outlet.
### I have used ReplaySubject in ngAfterViewInit of MapComponent to receive latest map coordinates when MapComponent loads later than other components. ReplaySubject(1) store the    latest data.

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
