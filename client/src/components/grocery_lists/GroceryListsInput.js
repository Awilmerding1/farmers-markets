import React, { Component } from 'react';

class GroceryListsInput extends Component {
  constructor(props) {
    super(props);
  this.state = {
    text: ""
  }
}

  handleOnChange(event) {
   this.setState({
     text: event.target.value,
   });
 }

 handleOnSubmit(event) {
  event.preventDefault();
  this.props.addGroceryItem({text: this.state.text, marketId: this.props.marketId });
  this.setState({
    text: '',
  });
}

  render() {
    return (
      <div>
      <form className="groceryForm" onSubmit={(event) => this.handleOnSubmit(event)} style={{textAlign: 'right', paddingRight: "20px"}}>
      <label>Add an Item to Purchase:</label>
        <input
          type="text"
          value={this.state.text}
          onChange={(event) => this.handleOnChange(event)} />
        <input type="submit" />
      </form>
      </div>
    );
  }
};

export default GroceryListsInput;
