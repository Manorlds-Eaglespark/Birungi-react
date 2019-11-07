import { GetAllCategoryConstants } from '../actions/actionTypes';


const getAllCategoriesReducer = (state = {
  categories: [],
}, { type, payload }) => {
  switch (type) {
    case GetAllCategoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: payload,
      };
    case GetAllCategoryConstants.GET_ALL_CATEGORIES_FAIL:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};

export default getAllCategoriesReducer;