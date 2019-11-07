
import { CreateShopConstants } from '../actions/actionTypes';


const createShopReducer = (state = {
}, { type, payload }) => {
  switch (type) {
    case CreateShopConstants.CREATE_SHOP_SUCCESS:
      return {
        ...state,
      };
    case CreateShopConstants.CREATE_SHOP_FAILED:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};

export default createShopReducer;
