
import { LoginConstants } from '../actions/actionTypes';


const loginReducer = (state = {
  isUserLoggedIn: false,
  logged_in: false,
  loader_off: false,
}, { type, payload }) => {
  switch (type) {
    case LoginConstants.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loader_off: true,
      };
    case LoginConstants.RESET_LOADER:
    return {
      ...state,
      loader_off: false,
    };
    case LoginConstants.LOGIN_USER_FAILED:
      return {
        ...state,
        errors: payload,
        loader_off: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
