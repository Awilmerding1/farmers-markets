import cuid from 'cuid';
export const cuidFn = cuid;

export default function farmersMarketsReducer(state ={loading:true, farmersMarkets: [], groceryList: []}, action) {
  switch (action.type) {
    case 'LOADING_FARMERS_MARKETS':
       return {...state, loading: true}
    case 'FETCH_FARMERS_MARKETS':
    const setIds = action.payload.map(market => market.id = cuidFn())
      return {...state, farmersMarkets: action.payload, loading: false}
      case 'ADD_GROCERY_ITEM':
        const groceryItem = { text: action.groceryItem.text, marketId: action.groceryItem.marketId, id: cuidFn() };
        return { ...state,
          groceryList: [...state.groceryList, groceryItem]
        }
      case 'DELETE_GROCERY_ITEM':
        const groceryList = state.groceryList.filter(groceryItem => groceryItem.id !== action.id);
        return {...state, groceryList }
    default:
      return state;
}
}
