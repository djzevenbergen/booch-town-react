import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import editingReducer from '../../reducers/editing-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from '../../actions';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterKegList: {},
      formVisible: false,
      editing: false,
      selectedKeg: {}
    });

  });


  // problem
  test('check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, { type: null }));
  });


  //problem
  test('Check that initial state of kegListReducer matches root reducer', () => {
    const action = {
      type: 'ADD_KEG',
      name: "Red Berry Blaster",
      brand: "Jim's Booches",
      price: "4.00",
      flavor: "cherry",
      capacity: 124,
      howMuchLeft: "Plenty-o-Booch",
      id: 2
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that initial state of editingReducer matches root reducer', () => {
    const action = {
      type: 'TOGGLE_EDIT_FORM'
    }
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });

  test('Check that initial state of kegListReducer matches root reducer', () => {
    const currentState = {
      1: {
        name: "Red Berry Blaster",
        brand: "Jim's Booches",
        price: "4.00",
        flavor: "cherry",
        capacity: 124,
        howMuchLeft: "Plenty-o-Booch",
        id: 1
      },
      2: {

        name: "Sour Silk",
        brand: "Nature's Party-Planners",
        price: "6.99",
        flavor: "sour, lemon",
        capacity: 9,
        howMuchLeft: "Not Much",
        id: 2
      }
    }

    const action = c.selectKeg(2);

    console.log(action);

    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(rootReducer(currentState, action))
    expect(store.getState().masterKegList).toEqual(rootReducer(currentState, action));
  });

});