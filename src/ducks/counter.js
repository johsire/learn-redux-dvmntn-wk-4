
// CONSTANTS
const INCREMENT = "INCREMENT";


// ACTION BUILDERS
function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount
  }
}

// REDUCER
function(state, action) {
  switch(action.type) {
    case INCREMENT:
      let count = state.count + action.payload;
      return Object.assign({}, state, {count: count})
  }
}