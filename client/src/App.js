import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import { connect } from 'react-redux';
import {fetchFarmersMarkets} from './actions/fetchFarmersMarkets'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FarmersMarketsContainer from './containers/FarmersMarketsContainer';
import FarmersMarketsList from './components/farmers_markets/FarmersMarketsList'


class App extends Component {

  constructor(props) {
  super(props)
  this.state = {
    farmersMarkets: []
    }
  }

  componentDidMount() {
    fetch('api/farmers_markets', {
      accept: 'application/json',
    })
    .then(response => { return response.json()})
    .then(responseJSON => {return responseJSON})
    .then(farmersMarkets => this.setState({farmersMarkets: farmersMarkets}))
  }

  render() {
    return (
      <div className="App">
        <Router>
      		<React.Fragment>
          	<Route path="/farmersmarkets" component={FarmersMarketsContainer }/>
            <Route exact path="/" component={FarmersMarketsContainer}/>
            <Route path="/groceries" render={routerProps => <FarmersMarketsList {...routerProps}
              stateMarkets={this.state.farmersMarkets} stateList={this.props.state.groceryList}/>}/>
      		</React.Fragment>
      		</Router>
      </div>

    );
  }
}

const mapStateToProps = state => ({ state: state })

export default connect(mapStateToProps, {fetchFarmersMarkets})(App)
