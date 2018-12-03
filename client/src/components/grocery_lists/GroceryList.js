
import React, { Component } from 'react';
import {fetchGroceryItems} from '../../actions/fetchGroceryItems'

import GroceryItem from './GroceryItem';
import { connect } from 'react-redux';

class GroceryList extends Component {

    handleDelete = () => {
      this.props.fetchGroceryItems()
    }

    render() {
      const associatedMarkets = this.props.groceryList.filter(groceryItem => groceryItem.farmers_market_id === this.props.marketId);
       const mapGroceryList = associatedMarkets.map((groceryItem, index) => {
         return <GroceryItem key={index} handleDelete={this.handleDelete} groceryItem={groceryItem} />
       })
    return (
      <div>
      <ul className="groceryList">
        {mapGroceryList}
      </ul>
      </div>
    );
  }
};


export default GroceryList;
