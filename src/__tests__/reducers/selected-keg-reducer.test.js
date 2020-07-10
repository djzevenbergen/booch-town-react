import selectedKegReducer from '../../reducers/selected-keg-reducer';
//import * as c from '../../actions/ActionTypes';
import * as c from '../../actions/ActionTypes';

let action;
const currentState = {
  1: {
    name: "Sour Silk",
    brand: "Nature's Party-Planners",
    price: "6.99",
    flavor: "sour, lemon",
    capacity: 9,
    howMuchLeft: "Not Much",
    id: 1
  },
  2: {
    name: "Red Berry Blaster",
    brand: "Jim's Booches",
    price: "4.00",
    flavor: "cherry",
    capacity: 124,
    howMuchLeft: "Plenty-o-Booch",
    id: 2
  }
}

describe('selectedKegReducer', () => {
  test('Should successfully return id 1', () => {
    action = {
      type: c.SELECT_KEG,
      id: 1
    };
    expect(selectedKegReducer(currentState, action)).toEqual(1);
  });

  test('Should successfully return id ""', () => {
    const currentState = {
      id: 1
    }
    action = {
      type: c.DESELECT_KEG
    };
    expect(selectedKegReducer(currentState, action)).toEqual(null);
  });
});
