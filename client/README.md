# Portfolio

Portfolio website build with Angular frameworks.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.3.

#### Angular CLI
##### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

##### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

##### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

##### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

##### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

##### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Docker container
#### Build image
Use this command to build app ``docker build -t [username]/[image-name]:[tag] [directory]``
The above command, build the current directory into container and identify it by his tag
``````shell
$ cd portfolio/client
$ docker build -t [username]/portfolio-client:dev .
``````
#### Run container
Run 
``````shell
$ docker run -d --name  portfolio-client -p 80:80 "[username]/portfolio-client:dev"
``````

