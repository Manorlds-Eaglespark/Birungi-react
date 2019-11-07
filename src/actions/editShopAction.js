import axios from 'axios';
import { toast } from 'react-toastify';
import { EditShopConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/shops/edit';

const editShopAction = shopData => dispatch => axios.put(apiUrl, shopData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
  })
  .then((response) => {
    dispatch({
      type: EditShopConstants.EDIT_SHOP_DETAIL_SUCCESS,
      payload: response.data,
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    
    setTimeout(function() { window.location.reload(false); }, 1200);
  })
  .catch((error) => {
    dispatch({
      type: EditShopConstants.EDIT_SHOP_DETAIL_FAILED,
      payload: error.response,
    });
    toast.dismiss();
    console.log(error.response.data);
    toastFailure('dfgsdgfs', 'A');
  });

export default editShopAction;
