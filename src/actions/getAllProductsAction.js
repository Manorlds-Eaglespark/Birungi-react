import axios from 'axios';
import { GetAllProductsConstants, GetBaseUrl } from '../actions/actionTypes';

const apiUrl = GetBaseUrl.HOST + '/api/v1/products';


const getAllProductsAction = () => dispatch => axios.get(apiUrl, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    dispatch({
      type: GetAllProductsConstants.GET_ALL_PRODUCTS_SUCCESS,
      payload: response.data.products,
    });
  })
  .catch((error) => {
    const errorMessage = error.response;
    dispatch({
      type: GetAllProductsConstants.GET_ALL_PRODUCTS_FAIL,
      payload: errorMessage,
    });
  });

export default getAllProductsAction;