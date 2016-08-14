import angular from 'angular';
import fetchDataService from './app.service';
import TrInputToTextDirective from './tr-input-to-text/tr-input-to-text.directive';

import '../style/app.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

class AppCtrl {
  constructor(fetchDataService) {
    fetchDataService.getData().then(data => this.people = data);
  }
  delete(id) {
    this.people.splice(id, 1);
  }
  editSelected() {
    this.people.forEach(person => {
      if(person.isSelected){
        person.beingEdited = true;
      }
    });
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .service('fetchDataService', fetchDataService)
  .directive('trInputToTextDirective', TrInputToTextDirective)
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;