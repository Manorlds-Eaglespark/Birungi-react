import { GetSearcheItemsConstants } from '../actions/actionTypes';


const getSearchedItemsReducer = (state = {products: []},
     { type, payload }) => {
  switch (type) {
    case GetSearcheItemsConstants.GET_SEARCH_ITEMS_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case GetSearcheItemsConstants.GET_SEARCH_ITEMS_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default getSearchedItemsReducer;