import * as c from '../../src/actions/ActionTypes';

export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELECT_KEG:
      const selectedKeg = id;
      return selectedKeg;
    case c.DESELECT_KEG:
      const thisState = null;
      return thisState;
    default:
      return state;
  }
}