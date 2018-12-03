import React, { Component } from 'react'
import GroceryListsInput from '../components/grocery_lists/GroceryListsInput'
import GroceryList from '../components/grocery_lists/GroceryList'
import {fetchGroceryItems} from '../actions/fetchGroceryItems'
import {addGroceryItem} from '../actions/addGroceryItem'

import { connect } from 'react-redux';

class GroceryListsContainer extends Component {

  componentDidMount() {
    this.props.fetchGroceryItems()
  }

  addGroceryItem = (item) => {
    this.props.addGroceryItem(item)
    this.props.fetchGroceryItems()
  }

  render() {
    return (
      <div>
        <div><GroceryListsInput addGroceryItem={this.addGroceryItem}  marketId={this.props.farmersMarket.id}/></div>
        <div><GroceryList groceryList={this.props.groceryList} deleteGroceryItem={this.props.deleteGroceryItem} marketId={this.props.farmersMarket.id}/></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ groceryList: state.groceryList })

	const mapDispatchToProps = dispatch => {
	    return {
        addGroceryItem: groceryItem => dispatch({ type: 'ADD_GROCERY_ITEM', groceryItem }),
        deleteGroceryItem: groceryItemId => dispatch({type: 'DELETE_GROCERY_ITEM', id: groceryItemId })
	    };
	};


export default connect(mapStateToProps, {addGroceryItem, fetchGroceryItems})(GroceryListsContainer)
