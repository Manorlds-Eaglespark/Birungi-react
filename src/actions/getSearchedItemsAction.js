import axios from 'axios';
import { GetSearcheItemsConstants, GetBaseUrl } from './actionTypes';

const apiUrl = GetBaseUrl.HOST + '/api/v1/products/search';


const getSearchedItemsAction = searchData => dispatch => axios.post(apiUrl, searchData)
  .then((response) => {
    dispatch({
      type: GetSearcheItemsConstants.GET_SEARCH_ITEMS_SUCCESS,
      payload: response.data.products,
    });
  })
  .catch((error) => {
    dispatch({
      type: GetSearcheItemsConstants.GET_SEARCH_ITEMS_FAIL,
      payload: error.response,
    });
  });

export default getSearchedItemsAction;