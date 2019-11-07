import axios from 'axios';
import { toast } from 'react-toastify';
import { LoginConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import history from '../utils/history';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/user/login';

export const reset_loader = () => dispatch => {
  dispatch({
    type: LoginConstants.RESET_LOADER,
  });    
}


export const loginUserAction = (userData)  => dispatch => axios.post(apiUrl, userData)
  .then((response) => {
    dispatch({
      type: LoginConstants.LOGIN_USER_SUCCESS,
      payload: response.data,
    });    
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    sessionStorage.setItem('token', response.data.token);
    sessionStorage.setItem('shop_owner', response.data.shop_owner)
    sessionStorage.setItem('isLoggedIn', true);
    history.push('/control-panel');
  })
  .catch((error) => {
    console.log(error.response);
    dispatch({
      type: LoginConstants.LOGIN_USER_FAILED,
      payload: error.response.data.message,
    });
    toast.dismiss();
    toastFailure(error.response.data.message, 'A');
  });
