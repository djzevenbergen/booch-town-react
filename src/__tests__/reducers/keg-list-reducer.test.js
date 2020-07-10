import kegListReducer from '../../reducers/keg-list-reducer';
//import * as c from '../../actions/ActionTypes';
import * as c from '../../actions/ActionTypes';

let action;
const kegData = {
  name: "Red Berry Blaster",
  brand: "Jim's Booches",
  price: "4.00",
  flavor: "cherry",
  capacity: 124,
  howMuchLeft: "Plenty-o-Booch",
  id: 1

};

const updateKegData = {
  name: "Sour Silk",
  brand: "Nature's Party-Planners",
  price: "6.99",
  flavor: "sour, lemon",
  capacity: 9,
  howMuchLeft: "Not Much",
  id: 1
};

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

describe('kegListReducer', () => {
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, flavor, capacity, howMuchLeft, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      capacity: capacity,
      howMuchLeft: howMuchLeft,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      1: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        capacity: capacity,
        howMuchLeft: howMuchLeft,
        id: id
      }
    });
  });

  test('Should successfully update keg data if key already exits using same ADD_KEG reducer.', () => {
    const { name, brand, price, flavor, capacity, howMuchLeft, id } = updateKegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      capacity: capacity,
      howMuchLeft: howMuchLeft,
      id: id
    };
    expect(kegListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        flavor: flavor,
        capacity: capacity,
        howMuchLeft: howMuchLeft,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };

    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: "Red Berry Blaster",
        brand: "Jim's Booches",
        price: "4.00",
        flavor: "cherry",
        capacity: 124,
        howMuchLeft: "Plenty-o-Booch",
        id: 2
      }
    });
  });
});