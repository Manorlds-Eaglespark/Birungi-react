import { GetProductDetailConstants } from '../actions/actionTypes';


const getProductDetailReducer = (state = {
  productDetail: {},
  }, { type, payload }) => {
    switch (type) {
      case GetProductDetailConstants.GET_PRODUCT_DETAIL_SUCCESS:
        return {
          ...state,
          productDetail: payload,
        };
      case GetProductDetailConstants.GET_PRODUCT_DETAIL_FAIL:
        return {
          ...state,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default getProductDetailReducer;