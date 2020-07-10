import * as c from '../../src/actions/ActionTypes';

export default (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      console.log("hi");
      const newState = { ...state };
      const selectedKeg = newState[id];
      console.log(selectedKeg);
      return selectedKeg;
    case c.DESELECT_KEG:
      console.log("hi");
      const thisState = {};
      return thisState;
    default:
      return state;
  }
}