import axios from 'axios';
import { toast } from 'react-toastify';
import { DeleteCategoryConstants, GetBaseUrl } from '../../src/actions/actionTypes';
import {toastSuccess, toastFailure} from '../utils/toast'

const apiUrl = GetBaseUrl.HOST + '/api/v1/admin/categories/';

const deleteCategoryAction = (category_id) => dispatch => axios.delete(apiUrl+category_id, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${sessionStorage.getItem('token')}`,
    },
  })
  .then((response) => {
    dispatch({
      type: DeleteCategoryConstants.DELETE_CATEGORY_SUCCESS
    });
    toast.dismiss();
    toastSuccess(response.data.message, 'A')
  })
  .catch((error) => {
    dispatch({
      type: DeleteCategoryConstants.DELETE_CATEGORY_FAILED
    });
    toast.dismiss();
    toastFailure('Delete Failed', 'A');
  });

export default deleteCategoryAction;
