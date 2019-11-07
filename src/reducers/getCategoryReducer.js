import { GetProductCategoryConstants } from '../actions/actionTypes';


const getCategoryReducer = (state = {
  productCategory: [],
  }, { type, payload }) => {
    switch (type) {
      case GetProductCategoryConstants.GET_PRODUCT_CATEGORY_SUCCESS:
        return {
          ...state,
          productCategory: payload,
        };
      case GetProductCategoryConstants.GET_PRODUCT_CATEGORY_FAIL:
        return {
          ...state,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default getCategoryReducer;