# dds2-via-npm

This is an empty Angular package that contains the DDS2 package as a dev dependency, and is confirmed to easily install on a new machine as a newly-cloned project.

## Installation

After cloning, simply run `npm install` and all node modules will be installed *while you are on the Dell VPN*. **This works because the project contains at its root the file `.npmrc` directing it to use Dell's Artifactory server**.

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
