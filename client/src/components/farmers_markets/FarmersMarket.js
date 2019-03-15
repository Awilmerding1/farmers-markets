import cuid from 'cuid';
import React, { Component } from 'react';
import GroceryListsContainer from '../../containers/GroceryListsContainer'
export const cuidFn = cuid;
class FarmersMarket extends Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  clicked = () => {
    this.setState({counter: this.state.counter + 1})
  }

  render() {
  const {farmersMarket} = this.props
  const days = Object.keys(farmersMarket).filter(key => key === "monday" || key === "tuesday" || key === "wednesday" || key === "thursday" || key === "friday" || key === "saturday" || key === "sunday")
  const dayArray = []
  const dayValues = days.forEach(day => {if (farmersMarket[day] !== null && farmersMarket[day] !== "") {dayArray.push(day)}})


  return (
  <div className= "marketSearchandList">
    <button onClick={this.clicked}>Counter: {this.state.counter}</button>
    <li  className="marketListItem">
      {farmersMarket.facilityname} - {farmersMarket.address}, {farmersMarket.borough} {farmersMarket.zipcode} {dayArray.map(day => <p key={cuidFn()} className="daysOpen">{day.charAt(0).toUpperCase() + day.slice(1) + ": " + farmersMarket[day]}</p>)}<br/>
      <GroceryListsContainer farmersMarket={farmersMarket} />
    </li><br/><br/>
  </div>
)
}
}

export default FarmersMarket;
