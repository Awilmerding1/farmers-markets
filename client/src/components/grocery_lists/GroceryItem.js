
import React, { Component } from 'react';

const GroceryItem = ({groceryItem, deleteGroceryItem }) =>
  <div>
    <li className="groceryItem">
      {groceryItem.text}
      <button className="groceryButton" onClick={() =>
       deleteGroceryItem(groceryItem.id)}> Delete </button>
    </li>
  </div>

export default GroceryItem;
