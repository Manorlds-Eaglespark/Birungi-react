import axios from 'axios';
import { GetProductDetailConstants, GetBaseUrl } from '../actions/actionTypes';

const apiUrl = GetBaseUrl.HOST + '/api/v1/products/';

const getProductDetailAction = (product_id) => dispatch => axios.get(apiUrl + product_id, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    dispatch({
      type: GetProductDetailConstants.GET_PRODUCT_DETAIL_SUCCESS,
      payload: response.data.product,
    });
  })
  .catch((error) => {
    const errorMessage = error.response;
    dispatch({
      type: GetProductDetailConstants.GET_PRODUCT_DETAIL_FAIL,
      payload: errorMessage,
    });
  });

export default getProductDetailAction;