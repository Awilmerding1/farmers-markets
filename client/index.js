import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import farmersMarketsReducer from './reducers/farmersMarketsReducer'
import FarmersMarketsList from './components/farmers_markets/FarmersMarketsList'


const store = createStore(farmersMarketsReducer, applyMiddleware(thunk)
	);

ReactDOM.render(
  <Provider store={store}>
		<App props={store}/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
