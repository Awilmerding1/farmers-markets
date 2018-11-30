import fetch from 'isomorphic-fetch';

export function fetchUser() {
  return fetch('api/users', {
    accept: 'application/json',
  })
  .then(response => { return response.json()})
  .then(responseJSON => {return responseJSON})
  .then(user => dispatch({ type: 'FETCH_USER', payload: user }))
}
}
