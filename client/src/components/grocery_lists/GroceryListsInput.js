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
  this.setState({
    text: '',
  });
  const item = {description: this.state.text, farmers_market_id: this.props.marketId}

  this.props.addGroceryItem(item)

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
