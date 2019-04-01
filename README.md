# WeatherReport

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.3.

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

### Team: 3-2

### Team Members:

**Name**: Neha Navgale **Class ID**: 19

**Name**: Naveena Madepally **Class ID**: 17

### Assignment Objective:

The purpose of this assignment is to develop a single page application, using bootstrap and angular, which will display current weather and next five hours of weather forecast of city entered by the user.

### Languages Used:

HTML, CSS, Typescript

### Tools Used: 

WebStorm, GitHub

### Framework Used:

Bootstrap-4, Angular-7

### Introduction:

The Weather Report application is a single page application to display the weather details. The application has two input fields: State Code and City Name. Once user enter the correct state code and city name and click on Get weather Details current weather details and next five hours of data will be displayed.

### Design/Implementation:

**Develop Angular Project:**

In order to create a Angular project we have followed below steps:
1. Installed Angular using command: **npm install -g @angular/cli**. Angular CLI 7.2.3 is installed.
2. Created new angular project using command: **ng new weatherReport**. This will create all the files and install packages required for any angular project.
3. Navigate to project directory: **cd weatherReport**
4. Installed tsLint using command: **npm install tslint typescript**
5. Installed Bootstrap using command: **npm install bootstrap**
6. In order to run the default angular project run the command: ng-serve. It will build the app and will start the web server on port 4200. To open the application on browser we used URL: http://localhost:4200/
7. Added weather component in project using command: **ng generate component weather**

**Wireframe:**

Before creating a UI of application we have created a draft wireframe.
![WireFrame](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/WireFrame.png)

**UI Design:**

1. Responsive UI for this application is created using HTML, CSS and Bootstrap classes in HTML file 'weather.component.html' and CSS file 'weather.component.css'. 
2. We have created Bootstrap grid structure for different components of UI. 

 * Divided the screen into two rows. **First row has two columns** in which one column has **search form** that has two
  input fields for user to enter the State Code and City Name on the left grid along with a button 'Get Weather 
  Details'and the other column displays a default message is displayed instructing user to enter the required details 
  and click on button. Once user enters the correct State Code, City Name and click on 'Get Weather Details' **right 
  column will display the current weather of entered city**
* Second row will display the hourly forecast of weather.This grid is visible only after clicking the 'Get Weather 
  Details' button.**This row has code for only one column that is repeated for 5 times using a 'ngFor' to display next 5 
  hours of weather forecast.**

 Below is the screenshot of HTML and CSS code:

![HTML Code](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/HTML_Code1.png)

![HTML Code](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/HTML_Code2.png)

![CSS Code](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/CSS1.png)

![CSS Code](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/CSS2.png)

**Type Script Code:**


![Typescript Code](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/TS_Code.png)

**Input:**

![Input](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/Input.png)

**Output:**

![Output](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/Output.png)

**Validation:**

Validations are added to guide user if any incorrect input is provided. On the load of the web application a message is displayed on the right side box instructing user to enter the state code, city name and click on button. 
![General Message](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/General%20Instruction.png)

If any incorrect state code or city name is entered and click on button error message will be displayed in the right grid asking user to enter the correct values.
![Error Message](https://github.com/NehaNavgale/CS5551_AdvanceSoftwareEngineering/blob/master/Documentation/Lab-2/Error%20message.png)

For validation we have used *ngIf="condition".


**Issues:**

[API](http://api.wunderground.com/api/36b799dc821d5836/forecast/q/CA/San_Francisco.json) for getting hourly forecast provided in the Lab-2 Assignment was not returning the hourly forecast instead it was returning day-night forecast. We have checked this with TA and after her confirmation we are using hourly forecast API provided by **wunderground**.

Correct API that we are using in Assignment: http://api.wunderground.com/api/36b799dc821d5836/hourly/q/MO/kansas%20city.json

**Conclusion:**

While working on this assignment we learned HTML5, CSS, Bootstrap, Angular 7 and Typescript.
