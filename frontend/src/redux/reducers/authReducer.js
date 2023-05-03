import {
  FAIL,
  GET_CURRENT,
  LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../actionTypes/authTypes";
const initialState = {
  user: null,
  errors: [],
  load: true,
  auth: false,
  isauth: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      localStorage.setItem("token", payload.token);
      return { ...state, user: payload.newUser, load: false, auth: true };

    case LOGIN:
      localStorage.setItem("token", payload.token);
      // console.log(payload.token);

      return { ...state, user: payload.founduser, load: false, auth: true };
    case LOADING:
      return {
        ...state,
        load: false,
      };
    case FAIL:
      return { ...state, errors: payload.errors };

    case GET_CURRENT:
      return { ...state, user: payload.user, auth: true };

    case LOGOUT:
      localStorage.removeItem("token");
      return { ...state, user: null, load: false };

    default:
      return state;
  }
};
export default authReducer;
