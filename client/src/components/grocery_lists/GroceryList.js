
import React from 'react';
import GroceryItem from './GroceryItem';

const GroceryList = ({groceryList, marketId, deleteGroceryItem}) => {

     const associatedMarkets = groceryList.filter(groceryItem => groceryItem.farmers_market_id === marketId);
      const mapGroceryList = associatedMarkets.map((groceryItem, index) => {
     return <GroceryItem key={index} groceryItem={groceryItem} deleteGroceryItem={deleteGroceryItem} />
      })

    return (
      <div>
      <ul className="groceryList">
        {mapGroceryList}
      </ul>
      </div>
    );
};

export default GroceryList;
