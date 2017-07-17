import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routing from './app.config';

// IMPORT STYLESHEETS
import '../assets/style/app.scss';

// IMPORT COMPONENTS
import Home from './components/home/home.controller';

class AppController {
  constructor() {

  }
}

AppController.$inject = [];

export default angular.module('app', [uirouter, Home])
  .controller('AppController', AppController)
  .config(routing);