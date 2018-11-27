
import React, { Component } from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({groceryList, marketId, deleteGroceryItem}) => {

     const associatedMarkets = groceryList.filter(groceryItem => groceryItem.marketId === marketId);
      const mapGroceryList = associatedMarkets.map((groceryItem, index) => {
     return <GroceryItem key={index} groceryItem={groceryItem} deleteGroceryItem={deleteGroceryItem} />
      })

    return (
      <ul className="groceryList">
        {mapGroceryList}
      </ul>
    );
};

export default GroceryList;
