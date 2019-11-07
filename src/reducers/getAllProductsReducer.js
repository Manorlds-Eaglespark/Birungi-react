import { GetAllProductsConstants } from '../actions/actionTypes';


const getAllProductsReducer = (state = {
  products: [],
}, { type, payload }) => {
  switch (type) {
    case GetAllProductsConstants.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
      };
    case GetAllProductsConstants.GET_ALL_PRODUCTS_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default getAllProductsReducer;