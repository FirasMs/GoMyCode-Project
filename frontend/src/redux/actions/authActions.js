import {
  FAIL,
  GET_CURRENT,
  LOADING,
  LOGIN,
  LOGOUT,
  REGISTER,
} from "../actionTypes/authTypes";
import axios from "axios";

export const Register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/user/register", newUser);
    console.log(res);
    dispatch({ type: REGISTER, payload: res.data });

    navigate("/enter");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};

export const LoginAction = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post("/api/user/login", user);
    dispatch({ type: LOGIN, payload: res.data });
    navigate("/enter");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const getCurrent = () => async (dispatch) => {
  const config = {
    headers: {
      authentication: localStorage.getItem("token"),
    },
  };
  try {
    const res = await axios.get("/api/user/current", config);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const Logout = () => {
  return {
    type: LOGOUT,
  };
};
