import * as c from '../../src/actions/ActionTypes';
//import * as c from '../../actions/ActionTypes';

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
      console.log(" ------ ");
      console.log(newState);
      console.log(id + "is getting deleted");
      delete newState[id];
      return newState;
    // case c.UPVOTE_POST:
    //   const upvotedState = { ...state };
    //   upvotedState[id].upvotes = upvotedState[id].upvotes + 1;
    //   return upvotedState;
    case c.PULL_KEG:
      const pulledKegState = { ...state };
      pulledKegState[id].capacity = pulledKegState[id].capacity - 1;
      return pulledKegState;
    // case c.SELECT_KEG:
    //   return state;
    default:
      return state;
  }
}