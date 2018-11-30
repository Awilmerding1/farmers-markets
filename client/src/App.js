import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import fetch from 'isomorphic-fetch';
import logo from './logo.svg';
import { connect } from 'react-redux';
import {fetchFarmersMarkets} from './actions/fetchFarmersMarkets'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import FarmersMarketsContainer from './containers/FarmersMarketsContainer';
import LoginContainer from './containers/LoginContainer';
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
      <div>{console.log(this.state.farmersMarkets)}</div>
      <div>{console.log(this.props.state.farmersMarkets)}</div>
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
