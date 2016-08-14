import app from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should convert beingEdited to true where isSelected is true', () => {
            ctrl.people = [
              { isSelected: false, beingEdited: false },
              { isSelected: false, beingEdited: false },
              { isSelected: true, beingEdited: false },
              { isSelected: false, beingEdited: false },
            ];
            ctrl.editSelected();
            expect(ctrl.people[2].beingEdited).toEqual(true);
    });
    it('should remove element by given id', () => {
            ctrl.people = [
              { isSelected: false, beingEdited: false },
              { isSelected: false, beingEdited: false },
              { isSelected: true, beingEdited: false },
              { isSelected: false, beingEdited: false },
            ];
            ctrl.delete(2);
            ctrl.peopleAfter = [
              { isSelected: false, beingEdited: false },
              { isSelected: false, beingEdited: false },
              { isSelected: false, beingEdited: false },
            ];
            expect(ctrl.people).toEqual(ctrl.peopleAfter);
    });
  });
});
