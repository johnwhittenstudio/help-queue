import * as constants from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
  case constants.ADD_TICKET:
    // Object.assign clones the state object.
    //Object.assign takes three arguments. 1. empty object, 2. object that will be cloned 3. the change that should be made to our new copy
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  case constants.DELETE_TICKET:
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};