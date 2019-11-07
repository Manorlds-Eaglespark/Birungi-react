import axios from 'axios';
import { GetDetailsConstants, GetBaseUrl } from '../actions/actionTypes';

const apiUrl = GetBaseUrl.HOST + '/api/v1/shops/owned';

const getShopDetailAction = () => dispatch => axios.get(apiUrl, {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `${sessionStorage.getItem('token')}`,
  },
})
  .then((response) => {
    dispatch({
      type: GetDetailsConstants.GET_SHOP_DETAIL_SUCCESS,
      payload: response.data,
    });
  })
  .catch((error) => {
    dispatch({
      type: GetDetailsConstants.GET_SHOP_DETAIL_FAILED,
    });
  });

export default getShopDetailAction;