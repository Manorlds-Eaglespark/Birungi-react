import { combineReducers } from 'redux';
import getAllProductsReducer from '../reducers/getAllProductsReducer';
import getAllCategoriesReducer from '../reducers/getAllCategoriesReducer';
import getSearchedItemsReducer from '../reducers/getSearchedItemsReducer';
import getCategoryReducer from '../reducers/getCategoryReducer';
import getProductDetailReducer from '../reducers/getProductDetailReducer';
import loginReducer from '../reducers/loginReducer';
import createShopReducer from '../reducers/createShopReducer';
import getShopDetailReducer from '../reducers/getShopDetailReducer';

export default combineReducers({
    getAllProductsReducer,
    getAllCategoriesReducer,
    getSearchedItemsReducer,
    getCategoryReducer,
    getProductDetailReducer,
    loginReducer,
    createShopReducer,
    getShopDetailReducer,
});
