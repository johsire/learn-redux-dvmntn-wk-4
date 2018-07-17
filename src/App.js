import React, { Component } from "react";
import "./App.css";

import { connect } from 'react-redux';
import { increment, decrement, undo, redo } from './ducks/counter';

class App extends Component {
  render() {
    // always destructure everything from props;
    const { count, increment, decrement, undo, redo, futureValues, previousValues } = this.props;
    return (

      <div className="app">
        <section className="counter">
          <h1 className="counter__current-value">{ count }</h1>
          <div className="counter__button-wrapper">
            <button
              className="counter__button increment-one"
              onClick={ () => increment(1) }
            >
              +1
            </button>
            <button
              className="counter__button increment-five"
              onClick={ () => increment(5) }
            >
              +5
            </button>
            <button
              className="counter__button decrement-one"
              onClick={ () => decrement(1) }
            >
              -1
            </button>
            <button
              className="counter__button decrement-five"
              onClick={ () => decrement(5) }
            >
              -5
            </button>
            <br />
            <button
              className="counter__button undo"
              disabled={ previousValues.length === 0 }
              onClick={ () => undo }
            >
              Undo
            </button>
            <button
              className="counter__button redo"
              disabled={ futureValues.length === 0 }
              onClick={ () => redo }
            >
              Redo
            </button>
          </div>
        </section>
        <section className="state">
          <pre>
            { JSON.stringify( this.props, null, 2 ) }
          </pre>
        </section>
      </div>
    );
  }
}

function copyFromStoreToProps(stateFromTheStore) {
  return {
    count: stateFromTheStore.count
  }
}

const connectedApp = connect(copyFromStoreToProps, { increment, decrement, undo, redo });
export default connectedApp(App);
