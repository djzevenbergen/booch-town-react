import * as c from '../../src/actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, flavor, capacity, howMuchLeft, id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      const newState = { ...state };
      console.log(" ------ ");
      console.log(newState);
      console.log(id + "is getting deleted");
      delete newState[id];
      return newState;
    // case c.PULL_KEG:
    //   const pulledKegState = { ...state };
    //   pulledKegState[id].capacity = pulledKegState[id].capacity - 1;
    //   return pulledKegState;
    default:
      return state;
  }
}