
import { EditShopConstants } from '../actions/actionTypes';


const editShopReducer = (state = {
}, { type, payload }) => {
  switch (type) {
    case EditShopConstants.EDIT_SHOP_DETAIL_SUCCESS:
      return {
        ...state,
        updated: true,
      };
    case EditShopConstants.EDIT_SHOP_DETAIL_FAILED:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};

export default editShopReducer;
