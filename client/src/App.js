import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FarmersMarketsContainer from './containers/FarmersMarketsContainer';
import FarmersMarketsList from './components/farmers_markets/FarmersMarketsList'


class App extends Component {

  onthis () {
    let newArray = []
    this.props.state.farmersMarkets.forEach(market => {
      newArray.push({facilityname: market.facilityname, address: market.address, borough: market.borough, zipcode: market.zipcode, monday: market.monday, tuesday: market.tuesday, wednesday: market.wednesday, friday: market.friday, saturday: market.saturday, sunday: market.sunday})
    })

    fetch('http://localhost:3000/api/farmers_market', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newArray[0])
      })


  }

  render() {
    return (

      <div className="App">
        <div onClick={this.onthis.bind(this)}>Click</div>
        <Router>
      		<React.Fragment>
          	<Route path="/farmersmarkets" component={FarmersMarketsContainer }/>
            <Route exact path="/" component={FarmersMarketsContainer}/>
            <Route path="/groceries" render={routerProps => <FarmersMarketsList {...routerProps}
              stateMarkets={this.props.state.farmersMarkets} stateList={this.props.state.groceryList}/>}/>
      		</React.Fragment>
      		</Router>
      </div>

    );
  }
}

const mapStateToProps = state => ({ state: state })

export default connect(mapStateToProps)(App)
