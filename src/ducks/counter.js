
// CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const UNDO = "UNDO";
const REDO = "REDO";


// ACTION BUILDERS
export function increment(amount) {
  return {
    type: INCREMENT,
    payload: amount
  }
}

export function decrement(amount) {
  return {
    type: DECREMENT,
    payload: amount
  }
}

export function undo(amount) {
  return {
    type: UNDO,
    payload: amount
  }
}

export function redo(amount) {
  return {
    type: REDO,
    payload: amount
  }
}

const initialState = {
  count: 73,
  futureValues: [],
  previousValues: []
}

// REDUCER
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      let count = state.count + action.payload;
      return Object.assign({}, state, { count: count })
  }

    switch(action.type) {
      case DECREMENT:
        let count = state.count - action.payload;
        return Object.assign({}, state, { count: count })
    }

    switch(action.type) {
      case UNDO:
      let previousValues = state.previousValues.slice( 1 );
      return Object.assign({}, state, { previousValues: previousValues })
    }

    switch(action.type) {
      case REDO: 
      let futureValues = state.futureValues.slice( 1 );
      return Object.assign({}, state, { futureValues: futureValues })
    }

  // always return state so if there's a condition that isnt defined it returns the  default
  return state;
}