
import React from 'react';
import {fetchGroceryItems} from '../../actions/fetchGroceryItems'
import GroceryItem from './GroceryItem';
import { connect } from 'react-redux';

const GroceryList = ({groceryList, deleteGroceryItem, marketId}) => {

      const associatedMarkets = groceryList.filter(groceryItem => groceryItem.farmers_market_id === marketId);
       const mapGroceryList = associatedMarkets.map((groceryItem, index) => {
         return <GroceryItem key={groceryItem.id} deleteGroceryItem={deleteGroceryItem} groceryItem={groceryItem} />
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
