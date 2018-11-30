import cuid from 'cuid';
export const cuidFn = cuid;

export default function farmersMarketsReducer(state ={loading:true, farmersMarkets: [], groceryList: []}, action) {
  switch (action.type) {
    case 'LOADING_FARMERS_MARKETS':
       return {...state, loading: true}
    case 'FETCH_FARMERS_MARKETS':
      return {...state, farmersMarkets: action.payload, loading: false}
      case 'FETCH_GROCERY_ITEMS':
        return {...state, groceryList: action.payload, loading: false }
      case 'ADD_GROCERY_ITEM':
        const groceryItem = { description: action.groceryItem.description, farmers_market_id: action.groceryItem.farmers_market_id};
        return { ...state, groceryList: [...state.groceryList, groceryItem]}
      case 'DELETE_GROCERY_ITEMS':
        const groceryList = state.groceryList.filter(groceryItem => groceryItem.id !== action.id);
        return {...state, groceryList }

    default:
      return state;
}
}
