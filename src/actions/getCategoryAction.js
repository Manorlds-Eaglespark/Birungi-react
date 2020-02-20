import axios from 'axios';
import { GetProductCategoryConstants, GetBaseUrl } from '../actions/actionTypes';

const apiUrl = GetBaseUrl.HOST + '/api/v1/categories/';
const apiUrl_2 = '/products';

const getCategoryAction = (category_id) => dispatch => axios.get(apiUrl + category_id + apiUrl_2, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    dispatch({
      type: GetProductCategoryConstants.GET_PRODUCT_CATEGORY_SUCCESS,
      payload: response.data.products,
    });
  })
  .catch((error) => {
    const errorMessage = error.response;
    dispatch({
      type: GetProductCategoryConstants.GET_PRODUCT_CATEGORY_FAIL,
      payload: errorMessage,
    });
  });

export default getCategoryAction;