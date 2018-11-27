import React, {Component} from 'react';
import cuid from 'cuid';
export const cuidFn = cuid;

class CombinedGroceryList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      markets: this.marketsAndItems(),
      clicked: false,
      sortGroceries: false,
      sortDay: false
    }
  }

  marketsAndItems = () => {
  let items = this.props.markets.map(market => market.items).flat()
  let matchItems = this.props.markets.filter(market => market.id === (items.map(item => item.marketId)))
  let marketItems = []
  this.props.markets.map(market => marketItems.push({facilityname: market.facilityname, items: market.items, days: Object.keys(market).filter(key => key === "monday" || key === "tuesday" || key === "wednesday" || key === "thursday" || key === "friday" || key === "saturday" || key === "sunday")}))
  return marketItems
  }

  clicked = () => {
    this.setState({clicked: !this.state.clicked})
  }

  sortGroceries = () => {
    this.setState({sortGroceries: !this.state.sortGroceries})
  }

  sortDay = () => {
    this.setState({sortDay: !this.state.sortDay})

  }

  getDays = () => {
    let z = this.state.markets.map(market => market.days).flat()
    return z.filter((v, i, a) => a.indexOf(v) === i)
  }

render () {

return (
  <div>
    <div className="showMarketNames" onClick={this.clicked}>Show/Hide Market Names</div>
    <div className="sortGroceries" onClick={this.sortGroceries}>{!this.state.sortGroceries ? "Sort By Market" : "Show One List"}</div>
    <div className="sortDay" onClick={this.sortDay}>Sort By Day</div>
    <div>{!this.state.sortGroceries && !this.state.sortDay && this.state.markets.map(market => market.items.map(item => <li key={item.id}>{item.text} {!this.state.clicked ? " " :  "- " + market.facilityname}</li>))}</div>
    <div>{this.state.sortGroceries && !this.state.sortDay && this.state.markets.map(market => <p key={cuidFn()} className="marketSort">{market.facilityname} {market.items.map(item => <li className="sortedByMarket" key={cuidFn()}>{item.text}</li>)}</p>)}</div>
    <div>{this.state.sortDay && this.getDays().map(day => <p className="marketSort" key={cuidFn()}>{day.charAt(0).toUpperCase() + day.slice(1)} {this.props.markets.filter(market => market[day]).map(market => <li className="sortedByMarket" key={cuidFn()}>{market.items.map(item => item.text)} {!this.state.clicked ? " " :  "- " + market.facilityname}</li>)}</p>)}</div>
  </div>

)
}
}
export default CombinedGroceryList;
