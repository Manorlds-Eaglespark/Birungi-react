import axios from 'axios';
import { toast } from 'react-toastify';
import { CreateCategoryConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/admin/categories';


const createCategoryAction = categoryData => dispatch => axios.post(apiUrl, categoryData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      "Authorization": `${sessionStorage.getItem('token')}`,
      'Access-Control-Allow-Origin': '*'
    },
  })
  .then((response) => {
    dispatch({
      type: CreateCategoryConstants.CREATE_CATEGORY_SUCCESS,
      payload: response.data,
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    setTimeout(function() { window.location.reload(false); }, 1200);
  })
  .catch((error) => {
    dispatch({
      type: CreateCategoryConstants.CREATE_CATEGORY_FAILED,
      payload: error.response,
    });
    toast.dismiss();
    // console.log(error.response);
    // toastFailure(error.response.data.message, 'A');
  });

export default createCategoryAction;
