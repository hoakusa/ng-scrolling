import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routing from './home.routes';

class HomeController {
  constructor() {

    
  }

}

HomeController.$inject = [];

export default angular.module('app.home', [uirouter])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;