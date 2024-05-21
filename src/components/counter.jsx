

//working code
import React, { Component } from 'react';

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log("callback function", this.state.count);
      }
    );
    console.log(this.state.count); // This will log the state before the update
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
