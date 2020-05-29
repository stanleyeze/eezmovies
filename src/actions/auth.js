import {
  SIGN_OUT,
  SIGN_IN,
  SESSION_INFO,
  CONFIRM_SIGN_UP,
  SIGN_UP,
} from "./actions";
import { Auth } from "aws-amplify";
import history from "../history";

//sign up action
export const confirmSignUp = (username, code) => async (dispatch) => {
  console.log(username);
  await Auth.confirmSignUp(username, code)
    .then((res) => {
      history.push("/login");
    })
    .catch((err) => {
      console.log(err, "errorr");
    });
};

//sign up action
export const session = () => async (dispatch) => {
  await Auth.currentAuthenticatedUser({
    bypassCache: false,
  })
    .then((user) => {
      dispatch({
        type: SESSION_INFO,
        payload: { username: user.username, isSignedIn: true },
      });
    })
    .catch((err) => console.log(err));
};

//sign up action
export const signup = (username, password, attributes) => async (dispatch) => {
  await Auth.signUp({
    username,
    password,
    attributes,
  })
    .then((res) => {
      console.log(res);
      dispatch({
        type: SIGN_UP,
        payload: { username: res.user.username, isSignedIn: true },
      });
      history.push("sign-up/confirmation");
    })
    .catch((err) => {
      console.log(err, "errorr");
    });
};

export const signinWithEmailAndPassword = (username, password) => async (
  dispatch
) => {
  await Auth.signIn({
    username,
    password,
  })
    .then((res) => {
      console.log(res);
      dispatch({
        type: SIGN_IN,
        payload: { username: res.user.username, isSignedIn: true },
      });
    })
    .catch((err) => {
      console.log(err, "errorr");
    });
};
