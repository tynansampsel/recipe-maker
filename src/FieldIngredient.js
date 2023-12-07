import React, { Component } from 'react';

class FieldIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredient: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      ingredient: event.target.value
    });
  }

  render() {
    return (
      <input
          type="text"
          value={this.state.ingredient}
          onChange={this.handleInputChange}
      />
    );
  }
}

export default FieldIngredient;