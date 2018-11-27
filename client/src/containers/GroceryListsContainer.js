import React, { Component } from 'react'
import GroceryListsInput from '../components/grocery_lists/GroceryListsInput'
import GroceryList from '../components/grocery_lists/GroceryList'
import CombinedGroceryList from '../components/grocery_lists/CombinedGroceryList'
import { connect } from 'react-redux';

class GroceryListsContainer extends Component {


  render() {
    return (
      <div>
        <div><GroceryListsInput addGroceryItem={this.props.addGroceryItem}  marketId={this.props.farmersMarket.id}/></div>
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


export default connect(mapStateToProps, mapDispatchToProps)(GroceryListsContainer)
