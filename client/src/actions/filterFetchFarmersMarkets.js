import fetch from 'isomorphic-fetch';

export function filterFetchFarmersMarkets(data) {
  let dataValues = Object.values(data)
  dataValues.shift()
  let filteredMarkets = []
  if (data.search === "" && dataValues.length < 1) {
    return (dispatch) => {
  	  dispatch({ type: 'LOADING_MARKETS' })
    return fetch('https://data.cityofnewyork.us/resource/94pk-v63f.json')
    .then(response => response.json())
    .then(responseJSON => {return responseJSON})
    .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
  }
}else if (data.search !== "" && dataValues.length > 0) {
  return (dispatch) => {
	  dispatch({ type: 'LOADING_MARKETS' })
  return fetch(`https://data.cityofnewyork.us/resource/94pk-v63f.json?zipcode=${data.search}`)
  .then(response => response.json())
  .then(responseJSON => responseJSON.filter(r => {for(var i=0; i < dataValues.length; i++) {if (r.hasOwnProperty(dataValues[i])) {return filteredMarkets.push(r)}}}))
  .then(console.log(filteredMarkets.filter((obj, key, array) => array.map((obj2) => obj.id !== obj2.id))))
  .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
}
} else if (data.search !== "" && dataValues.length <= 0){
  return (dispatch) => {
	  dispatch({ type: 'LOADING_MARKETS' })
  return fetch(`https://data.cityofnewyork.us/resource/94pk-v63f.json?zipcode=${data.search}`)
  .then(response => response.json())
  .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
}
}
else {
  return (dispatch) => {
	  dispatch({ type: 'LOADING_MARKETS' })
  return fetch(`https://data.cityofnewyork.us/resource/94pk-v63f.json`)
  .then(response => response.json())
  .then(responseJSON => responseJSON.filter(r => {for(var i=0; i < dataValues.length; i++) {if (r.hasOwnProperty(dataValues[i])) {return filteredMarkets.push(r)}}}))
  .then(console.log(filteredMarkets.filter((obj, key, array) => array.map((obj2) => obj.id !== obj2.id))))
  .then(farmersMarkets => dispatch({ type: 'FETCH_FARMERS_MARKETS', payload: farmersMarkets }))
}
}
}
