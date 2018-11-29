
import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({groceryList, marketId, deleteGroceryItem}) => {

     const associatedMarkets = groceryList.filter(groceryItem => groceryItem.marketId === marketId);
      const mapGroceryList = associatedMarkets.map((groceryItem, index) => {
     return <GroceryItem key={index} groceryItem={groceryItem} deleteGroceryItem={deleteGroceryItem} />
      })

    return (
        <div><p>{console.log(groceryList)}</p>
      <ul className="groceryList">
        {mapGroceryList}
      </ul>
      </div>
    );
};

export default GroceryList;
