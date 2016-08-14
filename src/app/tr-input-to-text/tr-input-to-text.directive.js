import controller from './tr-input-to-text.controller';

const TrInputToTextDirective = () => ({
    transclude: true,
    restrict: 'A',
    template: require('./tr-input-to-text.template.html'),
    controller,
    controllerAs: '$ctrl',
    bindToController: {
      boundPerson: '=',
    },
  });

export default TrInputToTextDirective;