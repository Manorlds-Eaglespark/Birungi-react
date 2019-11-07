import axios from 'axios';
import { toast } from 'react-toastify';
import { DeleteShopConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/shops/edit';

const deleteShopAction = () => dispatch => axios.delete(apiUrl, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
  })
  .then((response) => {
    dispatch({
      type: DeleteShopConstants.DELETE_SHOP_SUCCESS
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    sessionStorage.setItem('shop_owner', 0)
  })
  .catch((error) => {
    dispatch({
      type: DeleteShopConstants.DELETE_SHOP_FAILED
    });
    toast.dismiss();
    toastFailure('Delete Failed', 'A');
  });

export default deleteShopAction;
