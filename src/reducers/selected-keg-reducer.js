import * as c from '../../src/actions/ActionTypes';

export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      // console.log("hi");
      // const newState = { ...state };
      const selectedKeg = id;
      console.log(selectedKeg);
      return selectedKeg;
    case c.DESELECT_KEG:
      console.log("hi");
      console.log("hm");
      const thisState = null;
      return thisState;
    default:
      return state;
  }
}