# MultiStepForm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

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




# Horas de trabajo. 
# Inicio 4-mayo-2023 10 am

# Dia         Horas         Descripcion
  1           4:10 min      Configuración inicial, assets y analisís del proyecto.
  2           4:30 min      





# Planeación del desarrollo del proyecto.

1.Cada paso es un componente cargado dinamicamente por ruta.
2.Cada paso sera un unico componente tanto para mobile, tablet y desktop, con sus respectivas modificaciones.



# Componentes reutilizables secundarios.

  * Componente de titulo y descripción para cada paso(step).
  * C. para boton next step, con posibilidad de cambio del label y el color de fondo.
  * C. Para los indicadores de estado, que presentan el step actual.
  * C. por cada plan en el step 2.
  * C. por cada servicio en el step 3. add on.
  * C. para la pareja de botones back y next step, el cual sera utilizado tanto en el componente principal para desktop y el footer de mobile,
    interactuando desde fuera con los metodos de redirecionamiento a otras paginas.


# Data
  * step 2 select plan, un array con la informacion de los planes, para luego renderizar. mutable de años a meses por boleano.
  * step 3 add on, un array con la informacion de los servicios, para luego renderizar. mutable de años a meses por boleano.


# Estructura en mobile
  Header
  Main
  Footer
  Container con posicionamiento


# Estructura en desktop
  Main
  Container con posicionamiento y aparace el sidebar


















