import axios from 'axios';
import { GetAllCategoryConstants, GetBaseUrl } from '../actions/actionTypes';

const apiUrl = GetBaseUrl.HOST + '/api/v1/categories';

const getAllCategoriesAction = () => dispatch => axios.get(apiUrl, {
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    dispatch({
      type: GetAllCategoryConstants.GET_ALL_CATEGORIES_SUCCESS,
      payload: response.data.categories,
    });
  })
  .catch((error) => {
    const errorMessage = error.response;
    dispatch({
      type: GetAllCategoryConstants.GET_ALL_CATEGORIES_FAIL,
      payload: errorMessage,
    });
  });

export default getAllCategoriesAction;