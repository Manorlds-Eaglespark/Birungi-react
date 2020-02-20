import axios from 'axios';
import { toast } from 'react-toastify';
import { EditProductConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/admin/products/';

const editProductAction = (productData, id) => dispatch => axios.put(apiUrl+id, productData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": `${sessionStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*'
    },
  })
  .then((response) => {
    dispatch({
      type: EditProductConstants.EDIT_PRODUCT_SUCCESS,
      payload: response.data,
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    setTimeout(function() { window.location.reload(false); }, 1200);
  })
  .catch((error) => {
    dispatch({
      type: EditProductConstants.EDIT_PRODUCT_FAILED,
      payload: error.response,
    });
    toast.dismiss();
  });

export default editProductAction;
