import cuid from 'cuid';
import React from 'react';
import GroceryListsContainer from '../../containers/GroceryListsContainer'
export const cuidFn = cuid;
const FarmersMarket = ({farmersMarket}) => {

  const days = Object.keys(farmersMarket).filter(key => key === "monday" || key === "tuesday" || key === "wednesday" || key === "thursday" || key === "friday" || key === "saturday" || key === "sunday")
  const dayArray = []
  days.forEach(day => {if (farmersMarket[day] !== null && farmersMarket[day] !== "") {dayArray.push(day)}})


  return (
  <div className= "marketSearchandList">
  <div></div>
    <li  className="marketListItem">
      {farmersMarket.facilityname} - {farmersMarket.address}, {farmersMarket.borough} {farmersMarket.zipcode} {dayArray.map(day => <p key={cuidFn()} className="daysOpen">{day.charAt(0).toUpperCase() + day.slice(1) + ": " + farmersMarket[day]}</p>)}<br/>
      <GroceryListsContainer farmersMarket={farmersMarket} />
    </li><br/><br/>
  </div>
)
}

export default FarmersMarket;
