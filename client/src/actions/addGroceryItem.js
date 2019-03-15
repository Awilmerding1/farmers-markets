import fetch from 'isomorphic-fetch';

export const addGroceryItem = (item) => {
  console.log('E')
  return (dispatch) => {
    dispatch({ type: 'LOADING_ITEMS' })
    fetch('/api/grocery_items', {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
    .then(response => { return response.json()})
    // .then(responseJSON => {return responseJSON})
    .then(groceryItem => {
      dispatch({ type: 'ADD_GROCERY_ITEM', payload: groceryItem })})
  }
}
