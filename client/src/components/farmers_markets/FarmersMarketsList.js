import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import CombinedGroceryList from '../grocery_lists/CombinedGroceryList'
import FarmersMarket from './FarmersMarket'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class FarmersMarketsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      markets: this.filterMarkets(),
      clicked: false,
      hideLink: false
    };
  };


  filterMarkets = () => {
    const filtered = this.props.stateMarkets.filter(market => this.mapStateList().includes(market.id))
    const mapped = filtered.map(market => Object.assign(market, { items: this.props.stateList.filter(item => item.farmers_market_id === market.id)}))
    return mapped
  }

  mapStateList = () => {
    return this.props.stateList.map(list => list.farmers_market_id)
  }

hideList = () => {
  this.setState({clicked: !this.state.clicked, hideLink: !this.state.hideLink})
}


render() {
  const { stateMarkets, stateList} = this.props;

  const style = (this.state.hideLink || this.state.markets.length < 1) ? {display: "none"} : {};

  return (
  <div>
    <div>{stateList.length < 1 ? <p className="noGroceries">Your Grocery List is Empty. Click <Link to={'/'}>here</Link> to search markets and start your list!</p> : <p></p>}</div>
    <div className="combinedGroceryListLink" ><Link to={'/groceries/list'} style={style} onClick={this.hideList}>View Grocery List</Link></div>
    <div className="combinedGroceryListLink" ><Link to={'/'} style={style} onClick={this.hideList}>Markets</Link></div>
    <div>
      <ul>{!this.state.clicked && this.state.markets.map(market => <FarmersMarket key={market.id} farmersMarket={market}/>)} </ul>
    </div>
    <div>
      <Route path="/groceries/list" render={routerProps => <ol><CombinedGroceryList {...routerProps}
      markets={this.state.markets} /></ol>} />
    </div>


  </div>
)
}

}

const mapStateToProps = state => {
  return {
    farmersMarkets: state.farmersMarkets,
    groceryList: state.groceryList
  };
}

export default connect(mapStateToProps)(FarmersMarketsList)
