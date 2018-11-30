import React, { Component } from 'react'
import GroceryListsInput from '../components/grocery_lists/GroceryListsInput'
import GroceryList from '../components/grocery_lists/GroceryList'
import {fetchGroceryItems} from '../actions/fetchGroceryItems'
import { connect } from 'react-redux';

class GroceryListsContainer extends Component {

  componentDidMount() {
    this.props.fetchGroceryItems()
  }

  render() {
    return (
      <div>
        <div><GroceryListsInput addGroceryItem={this.props.addGroceryItem}  marketId={this.props.farmersMarket.id}/></div>
        <div><GroceryList groceryList={this.props.groceryList}  marketId={this.props.farmersMarket.id}/></div>
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


export default connect(mapStateToProps, {fetchGroceryItems})(GroceryListsContainer)
