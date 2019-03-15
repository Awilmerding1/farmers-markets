import fetch from 'isomorphic-fetch';
import React from 'react';

const GroceryItem = ({groceryItem, deleteGroceryItem}) => {


  const deleteItem = (event) => {
    event.preventDefault()
    deleteGroceryItem(groceryItem)
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
