import axios from 'axios';
import { toast } from 'react-toastify';
import { EditCategoryConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/admin/categories/';

const editCategoryAction = (categoryData, id) => dispatch => axios.put(apiUrl+id, categoryData, {
    headers: {
        'Content-Type': 'multipart/form-data',
        "Authorization": `${sessionStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*'
    },
  })
  .then((response) => {
    dispatch({
      type: EditCategoryConstants.EDIT_CATEGORY_SUCCESS,
      payload: response.data,
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
    setTimeout(function() { window.location.reload(false); }, 1200);
  })
  .catch((error) => {
    dispatch({
      type: EditCategoryConstants.EDIT_CATEGORY_FAILED,
      payload: error.response,
    });
    toast.dismiss();
    console.log(error.data);
    // toastFailure(error.response.data.message, 'A');
  });

export default editCategoryAction;
