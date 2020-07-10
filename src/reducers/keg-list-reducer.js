import * as c from '../../src/actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, flavor, capacity, howMuchLeft, id } = action;
  switch (action.type) {
    case c.ADD_KEG:
      return Object.assign({}, state, {
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
    case c.DELETE_KEG:
      const newState = { ...state };
      delete newState[id];
      return newState;
    case c.PULL_KEG:
      const pulledKegState = { ...state };
      pulledKegState[id].capacity = pulledKegState[id].capacity - 1;
      return pulledKegState;
    default:
      return state;
  }
}