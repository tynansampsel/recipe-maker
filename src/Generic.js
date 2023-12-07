import React, { Component } from 'react';

class MyComponent extends Component {
  constructor(props) {
    super(props);

    // Initialize state or bind methods if needed
    // Example:
    this.state = {
      word: 'world'
    };

    // this.myMethod = this.myMethod.bind(this);
  }

  // You can define methods here
  // Example:
  // myMethod() {
  //   // Do something
  // }

  render() {
    return (
      <div>
        hello {this.state.word}
      </div>
    );
  }
}

export default MyComponent;
