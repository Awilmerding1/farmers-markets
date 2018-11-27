import React, { Component } from 'react'
import FarmersMarketsInput from '../components/farmers_markets/FarmersMarketsInput'
import FarmersMarkets from '../components/farmers_markets/FarmersMarkets'
import FarmersMarketsList from '../components/farmers_markets/FarmersMarketsList'
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {fetchFarmersMarkets} from '../actions/fetchFarmersMarkets'
import {filterFetchFarmersMarkets} from '../actions/filterFetchFarmersMarkets'

import { connect } from 'react-redux';

class FarmersMarketsContainer extends Component {

  constructor(props) {
  super(props)
  this.state = {
    searchParams: [],
    zip: ""
    }
  }

  componentDidMount() {
    this.props.history.push('/farmersmarkets')
    if (this.props.farmersMarkets.length < 1 && this.props.groceryList.length < 1) {
      this.props.fetchFarmersMarkets()
    }
   }

  handleSubmit = (data) => {
    this.props.filterFetchFarmersMarkets(data)
  }

  handleSearch = (searchParams, zip) => {
    this.setState({searchParams: searchParams, zip: zip.search})
  }

  getSearchParams = () => (this.state)


  render() {

    return (
      <div>

      <div className="groceryListLink" ><Link to={'/groceries'}>Review Grocery Lists</Link></div>
      <div>
        <FarmersMarketsInput handleSubmit={this.handleSubmit} handleSearch={this.handleSearch}/>
        <FarmersMarkets farmersMarkets={this.props.farmersMarkets} searchParams={this.getSearchParams()}/>
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


export default connect(mapStateToProps, {fetchFarmersMarkets, filterFetchFarmersMarkets})(FarmersMarketsContainer)
