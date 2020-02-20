import { GetAllShopProductsConstants } from '../actions/actionTypes';


const getAllShopProductsReducer = (state = {
    shop_products: [],
}, { type, payload }) => {
  switch (type) {
    case GetAllShopProductsConstants.GET_ALL_SHOP_PRODUCTS_SUCCESS:
      return {
        ...state,
        shop_products: payload,
      };
    case GetAllShopProductsConstants.GET_ALL_SHOP_PRODUCTS_FAILED:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default getAllShopProductsReducer;