import fetch from 'isomorphic-fetch';

  export const deleteGroceryItem = (groceryItem) => {
    return (dispatch) => {
      dispatch({ type: 'LOADING_ITEMS' })
      fetch('/api/grocery_items/' + groceryItem.id, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
      }).then(
       fetch('api/grocery_items', {
        accept: 'application/json',
      })
      .then(response => { return response.json()})
      .then(responseJSON => {return responseJSON})
      .then(groceryItems => dispatch({ type: 'FETCH_GROCERY_ITEMS', payload: groceryItems })))
    }
};
