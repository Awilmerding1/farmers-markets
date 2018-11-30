
import React from 'react';

const GroceryItem = ({groceryItem, deleteGroceryItem }) => {


  const deleteItem = (event) => {
    event.preventDefault()
    // deleteGroceryItem(groceryItem.id)
    fetch('/api/grocery_items/' + groceryItem, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({description: groceryItem.text, farmers_market_id: groceryItem.marketId})
  })
  }

return (
  <div>
    <li className="groceryItem">
      {groceryItem.text}
      <button className="groceryButton" onClick={deleteItem}> Delete </button>
    </li>
  </div>
  )
}
export default GroceryItem;
