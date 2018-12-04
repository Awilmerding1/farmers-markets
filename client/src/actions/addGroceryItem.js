import {fetchGroceryItems} from './fetchGroceryItems'
import fetch from 'isomorphic-fetch';

export const addGroceryItem = (item) => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_ITEMS' })
    fetch('/api/grocery_items', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    }).then(
     fetch('api/grocery_items', {
      accept: 'application/json',
    })
    .then(response => { return response.json()})
    .then(responseJSON => {return responseJSON})
    .then(groceryItems => dispatch({ type: 'FETCH_GROCERY_ITEMS', payload: groceryItems })))
  }
}
