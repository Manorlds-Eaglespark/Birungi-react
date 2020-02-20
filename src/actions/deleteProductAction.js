import axios from 'axios';
import { toast } from 'react-toastify';
import { DeleteProductConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/admin/products/';

const deleteProductAction = (id) => dispatch => axios.delete(apiUrl+id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
  })
  .then((response) => {
    dispatch({
      type: DeleteProductConstants.DELETE_PRODUCT_SUCCESS
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
  })
  .catch((error) => {
    dispatch({
      type: DeleteProductConstants.DELETE_PRODUCT_FAILED
    });
    toast.dismiss();
    toastFailure('Delete Failed', 'A');
  });

export default deleteProductAction;
