import TrInputToTextController from './tr-input-to-text.controller';

describe('TrInputToText', () => {

  describe('TrInputToTextController', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = new TrInputToTextController();
    });

    it('beingEdited should become true from false', () => {
            ctrl.boundPerson = {
              isSelected: false,
              beingEdited: false
            };
            ctrl.toggleEdit();
            expect(ctrl.boundPerson.beingEdited).toEqual(true);
    });
    it('beingEdited should become false from true', () => {
            ctrl.boundPerson = {
              isSelected: false,
              beingEdited: true
            };
            ctrl.toggleEdit();
            expect(ctrl.boundPerson.beingEdited).toEqual(false);
    });
  });
});
