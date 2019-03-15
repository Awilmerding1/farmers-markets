import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import farmersMarketsReducer from './reducers/farmersMarketsReducer'

const enhancer = compose(
	applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f()
)

const store = createStore(farmersMarketsReducer, enhancer
	);

ReactDOM.render(
  <Provider store={store}>
		<App props={store}/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
