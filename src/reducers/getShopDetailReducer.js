
import { GetDetailsConstants } from '../actions/actionTypes';


const getShopDetailReducer = (state = {},
     { type, payload }) => {
    switch (type) {
      case GetDetailsConstants.GET_SHOP_DETAIL_SUCCESS:
        return {
          ...state,
          shop: payload,
        };
      case GetDetailsConstants.GET_SHOP_DETAIL_FAILED:
        return {
          ...state,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default getShopDetailReducer;