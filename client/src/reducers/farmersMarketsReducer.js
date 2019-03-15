import cuid from 'cuid';
export const cuidFn = cuid;

export default function farmersMarketsReducer(state ={loading:true, farmersMarkets: [], groceryList: []}, action) {
  switch (action.type) {
    case 'LOADING_FARMERS_MARKETS':
       return {...state, loading: true}
       case 'LOADING_ITEMS':
          return {...state, loading: true}
    case 'FETCH_FARMERS_MARKETS':
      return {...state, farmersMarkets: action.payload, loading: false}
      case 'FETCH_GROCERY_ITEMS':
        return {...state, groceryList: action.payload, loading: false }
      case 'ADD_GROCERY_ITEM':
        const groceryItem = action.payload
          return {...state, groceryList: [...state.groceryList, groceryItem], loading: false }
      case 'DELETE_GROCERY_ITEM':
          return {...state, groceryList: state.groceryList.filter(item => item.id !== parseInt(action.payload.url.split("/").pop())), loading: false }
    default:
      return state;
}
}
