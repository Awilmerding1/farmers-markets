import React, { Component } from 'react'
import GroceryListsInput from '../components/grocery_lists/GroceryListsInput'
import GroceryList from '../components/grocery_lists/GroceryList'
import {fetchGroceryItems} from '../actions/fetchGroceryItems'
import {addGroceryItem} from '../actions/addGroceryItem'
import {deleteGroceryItem} from '../actions/deleteGroceryItem'


import { connect } from 'react-redux';

class GroceryListsContainer extends Component {


  addGroceryItem = (item) => {
    this.props.addGroceryItem(item)
    this.props.fetchGroceryItems()
  }

  deleteGroceryItem = (item) => {
    this.props.deleteGroceryItem(item)
    this.props.fetchGroceryItems()
  }

  render() {
    return (
      <div>
        <div><GroceryListsInput addGroceryItem={this.addGroceryItem}  marketId={this.props.farmersMarket.id}/></div>
        <div><GroceryList groceryList={this.props.groceryList} deleteGroceryItem={this.deleteGroceryItem} marketId={this.props.farmersMarket.id}/></div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ groceryList: state.groceryList })




export default connect(mapStateToProps, {addGroceryItem, deleteGroceryItem, fetchGroceryItems})(GroceryListsContainer)
