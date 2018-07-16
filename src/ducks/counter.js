
import { reducer } from '.';
// CONSTANTS
const INCREMENT = "INCREMENT";


// ACTION BUILDERS
export function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount
  }
}

// REDUCER
export default function reducer(state, action) {
  switch(action.type) {
    case INCREMENT:
      let count = state.count + action.payload;
      return Object.assign({}, state, { count: count })
  }

  // always return state so if there's a condition that isnt defined it returns the  default
  return state;
}