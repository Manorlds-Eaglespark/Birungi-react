import axios from 'axios';
import { toast } from 'react-toastify';
import { CreateShopConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/shops/create';

const createShopAction = shopData => dispatch => axios.post(apiUrl, shopData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
  })
  .then((response) => {
    dispatch({
      type: CreateShopConstants.CREATE_SHOP_SUCCESS,
      payload: response.data,
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    sessionStorage.setItem('shop_owner', 1)
    setTimeout(function() { window.location.reload(false); }, 1200);
  })
  .catch((error) => {
    dispatch({
      type: CreateShopConstants.CREATE_SHOP_FAILED,
      payload: error.response,
    });
    toast.dismiss();
    toastFailure(error.response.data.message, 'A');
  });

export default createShopAction;
