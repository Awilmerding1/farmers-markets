import fetch from 'isomorphic-fetch';

export function fetchGroceryItems() {
  return (dispatch) => {
  return fetch('api/grocery_items', {
    accept: 'application/json',
  })
  .then(response => { return response.json()})
  .then(responseJSON => {return responseJSON})
  .then(groceryItems => dispatch({ type: 'FETCH_GROCERY_ITEMS', payload: groceryItems }))
}
}
