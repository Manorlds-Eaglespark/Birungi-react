import axios from 'axios';
import { toast } from 'react-toastify';
import { CreateProductConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/shops/create';

const createProductAction = productData => dispatch => axios.post(apiUrl, productData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": `${sessionStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*'
    },
  })
  .then((response) => {
    dispatch({
      type: CreateProductConstants.CREATE_PRODUCT_SUCCESS,
      payload: response.data,
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    setTimeout(function() { window.location.reload(false); }, 1200);
  })
  .catch((error) => {
    console.log(error.response);
    dispatch({
      type: CreateProductConstants.CREATE_PRODUCT_FAILED,
      payload: error.response,
    });
    toast.dismiss();
    toastFailure(error.response.data.message, 'A');
  });

export default createProductAction;
