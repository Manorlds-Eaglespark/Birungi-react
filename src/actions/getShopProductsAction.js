import axios from 'axios';
import { GetAllShopProductsConstants, GetBaseUrl } from '../actions/actionTypes';

const apiUrl = GetBaseUrl.HOST + '/api/v1/products/shop/';

const getAllShopProductsAction = (shop_id) => dispatch => axios.get(apiUrl+shop_id, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    dispatch({
      type: GetAllShopProductsConstants.GET_ALL_SHOP_PRODUCTS_SUCCESS,
      payload: response.data.products,
    });
  })
  .catch((error) => {
    const errorMessage = error.response;
    dispatch({
      type: GetAllShopProductsConstants.GET_ALL_SHOP_PRODUCTS_FAILED,
      payload: errorMessage,
    });
  });

export default getAllShopProductsAction;