import fetch from 'isomorphic-fetch';
import React from 'react';

const GroceryItem = ({groceryItem, deleteGroceryItem}) => {


  const deleteItem = (event) => {
    event.preventDefault()
    fetch('/api/grocery_items/' + groceryItem.id, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      }
    })
    deleteGroceryItem(groceryItem.id)
  }

return (
  <div>
    <li className="groceryItem">
      {groceryItem.description}
      <button className="groceryButton" onClick={deleteItem}> Delete </button>
    </li>
  </div>
  )
}
export default GroceryItem;
