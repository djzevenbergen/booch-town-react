import editingReducer from '../../reducers/editing-reducer';

describe("editingReducer", () => {


  test('Should editing state to true', () => {
    expect(editingReducer(false, { type: 'TOGGLE_EDIT_FORM' })).toEqual(true);
  });
});