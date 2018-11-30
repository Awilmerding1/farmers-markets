
import React from 'react';

const GroceryItem = ({groceryItem, deleteGroceryItem }) => {


  const deleteItem = (event) => {
    event.preventDefault()
    deleteGroceryItem(groceryItem.id)
    fetch('/api/grocery_items/' + groceryItem.id, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: groceryItem.description, farmers_market_id: groceryItem.farmers_market_id})
  })
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
