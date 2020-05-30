import { SIGN_OUT, SIGN_IN, SESSION_INFO, SIGN_UP } from "./actions";
import { Auth } from "aws-amplify";
import history from "../history";

//sign up action
export const confirmSignUp = (username, code) => async (dispatch) => {
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
      console.log(user);
      dispatch({
        type: SESSION_INFO,
        payload: { username: user.username, isSignedIn: true },
      });
    })
    .catch((err) => {
      dispatch({
        type: SESSION_INFO,
        payload: { isSignedIn: false },
      });
    });
};

//sign up action
export const signups = (username, password, attributes) => async (dispatch) => {
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
      dispatch({
        type: SIGN_IN,
        payload: { username: res.username, isSignedIn: true },
      });
      window.location = "/";
    })
    .catch((err) => {
      console.log(err, "errorr");
    });
};

export const logout = () => async (dispatch) => {
  await Auth.signOut()
    .then((user) => {
      console.log(user);
      dispatch({
        type: SIGN_OUT,
      });
      history.push("/login");
      window.location.reload();
    })
    .catch((err) => console.log(err));
};
