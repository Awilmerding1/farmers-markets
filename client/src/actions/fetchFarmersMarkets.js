import fetch from 'isomorphic-fetch';

export function fetchFarmersMarkets() {
  return (dispatch) => {
	  dispatch({ type: 'LOADING_MARKETS' })
  return fetch('api/farmers_markets', {
    accept: 'application/json',
  })
  .then(response => { return response.json()})
  .then(responseJSON => { console.log(responseJSON); return responseJSON})
  .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
}
}
