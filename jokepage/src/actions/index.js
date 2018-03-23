import axios from 'axios';axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:5000';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const GET_JOKES = 'GET_JOKES';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/api/users`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED
        });
        history.push('/signin');
      })
      .catch(() => {
        dispatch(authError('Failed to register user'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/api/login`, { username, password })
      .then((res) => {
        dispatch({
          type: USER_AUTHENTICATED
        });
        history.push('/jokes');
        localStorage.setItem('token', res.data.token);
      })
      .catch(() => {
        dispatch(authError('Incorrect username/password combo'));
      });
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  console.log('Logout token line 61: ', localStorage.getItem('token'));
  return { type: USER_UNAUTHENTICATED };
};

export const getJokes = () => {
  const token = localStorage.getItem('token');
  return dispatch => {
    axios
      .get(`${ROOT_URL}/api/jokes`, { headers: { Authorization: token } })
      .then(response => {
        dispatch({
          type: GET_JOKES,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(authError('Failed to fetch jokes'));
      });
  };
};
