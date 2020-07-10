import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('post actions', () => {
  it('deletePost should create DELETE_POST action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('toggleEditForm should create TOGGLE_EDIT_FORM action', () => {
    expect(actions.toggleEditForm()).toEqual({
      type: c.TOGGLE_EDIT_FORM
    });
  });

  it('downvotePost should create DOWNVOTE_POST action', () => {
    expect(actions.pullKeg()).toEqual({
      type: c.PULL_KEG
    });
  });

  it('addPost should create ADD_POST action', () => {
    expect(actions.addKeg({ name: 'Sour Silk', brand: "Nature's Party-Planners", price: '6.99', flavor: "sour, lemon", capacity: 9, howMuchLeft: "Not Much", id: 1 })).toEqual({
      type: c.ADD_KEG,
      name: "Sour Silk",
      brand: "Nature's Party-Planners",
      price: "6.99",
      flavor: "sour, lemon",
      capacity: 9,
      howMuchLeft: "Not Much",
      id: 1
    });
  });
});