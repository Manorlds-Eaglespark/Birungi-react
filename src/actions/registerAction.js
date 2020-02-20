import axios from 'axios';
import { toast } from 'react-toastify';
import { RegisterConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/user/register';

export const registerUserAction = (userData)  => dispatch => axios.post(apiUrl, userData)
  .then((response) => {
    dispatch({
      type: RegisterConstants.REGISTER_SUCCESS,
      payload: response.data,
    });    
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    setTimeout(function() { window.location.reload(false); }, 1500);
  })
  .catch((error) => {
    console.log(error.response);
    dispatch({
      type: RegisterConstants.REGISTER_FAILED,
      payload: error.response.data.message,
    });
    toast.dismiss();
    toastFailure(error.response.data.message, 'A');
  });
