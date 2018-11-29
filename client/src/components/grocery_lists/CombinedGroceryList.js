import React, {Component} from 'react';
import cuid from 'cuid';
export const cuidFn = cuid;

class CombinedGroceryList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      markets: this.marketsAndItems(),
      clicked: false,
      sortGroceries: 0,
      sortDay: 0
    }
  }

  marketsAndItems = () => {
  let items = this.props.markets.map(market => market.items).flat()
  let matchItems = this.props.markets.filter(market => market.id === (items.map(item => item.marketId)))
  let marketItems = []
  this.props.markets.map(market => marketItems.push({facilityname: market.facilityname, items: market.items, days: Object.keys(market).filter(key => key === "monday" || key === "tuesday" || key === "wednesday" || key === "thursday" || key === "friday" || key === "saturday" || key === "sunday")}))
  return marketItems
  }

  clicked = (event) => {
    this.setState({clicked: !this.state.clicked})
  }

  sortGroceries = (event) => {
    if (this.state.sortGroceries <= this.state.sortDay) {
    this.setState({sortGroceries: event.timeStamp, sortDay: 0})
  } else {
      this.setState({sortGroceries: 0})
  }
  }

  sortDay = (event) => {
    if (this.state.sortDay <= this.state.sortGroceries) {
      this.setState({sortDay: event.timeStamp, sortGroceries: 0})
    } else {
        this.setState({sortDay: 0})
    }
  }

  getDays = () => {
    let z = this.state.markets.map(market => market.days).flat()
    return z.filter((v, i, a) => a.indexOf(v) === i)
  }

  returnToList = () => {
    if (this.state.sortDay === 0 && this.state.sortGroceries === 0 ){

    }
  }

render () {


return (
  <div>
    <div className="showMarketNames" onClick={this.clicked}>Show/Hide Market Names</div>
    <div className="sortGroceries" onClick={this.sortGroceries}>{this.state.sortGroceries === 0 ? "Sort By Market" : "Show One List"}</div>
    <div className="sortDay" onClick={this.sortDay}>{this.state.sortDay === 0 ? "Sort By Day" : "Show One List"}</div>
    <div>{this.state.sortGroceries === 0 && this.state.sortDay === 0 && this.state.markets.map(market => market.items.map(item => <li key={item.id}>{item.text} {!this.state.clicked ? " " :  "- " + market.facilityname}</li>))}</div>
    <div>{this.state.sortGroceries > this.state.sortDay && this.state.markets.map(market => <p key={cuidFn()} className="marketSort">{market.facilityname} {market.items.map(item => <li className="sortedByMarket" key={cuidFn()}>{item.text}</li>)}</p>)}</div>
    <div>{this.state.sortDay > this.state.sortGroceries && this.getDays().map(day => <p className="marketSort" key={cuidFn()}>{day.charAt(0).toUpperCase() + day.slice(1)} {this.props.markets.filter(market => market[day]).map(market => <li className="sortedByMarket" key={cuidFn()}>{market.items.map(item => item.text)} {!this.state.clicked ? " " :  "- " + market.facilityname}</li>)}</p>)}</div>
  </div>

)
}
}
export default CombinedGroceryList;
