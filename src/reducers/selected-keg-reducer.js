import * as c from '../../src/actions/ActionTypes';

export default (state = {}, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      const selectedKeg = id;
      console.log(selectedKeg);
      return selectedKeg;
    case c.DESELECT_KEG:
      console.log("hi");
      const thisState = null;
      return thisState;
    default:
      return state;
  }
}