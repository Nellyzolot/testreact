import {createAction} from 'redux-actions';
import axios from 'axios';
import * as actions from '../constants/Login'
import {ROUTING} from '../constants/Routing'

const setSidRequest = createAction(
    actions.SET_SID_REQUEST,
);

export const setSidSuccess = createAction(
    actions.SET_SID_SUCCESS
);

const setSidFail = createAction(
    actions.SET_SID_FAIL,
    error => ({error}),
);

export const setSid = (login, password) => async (dispatch) => {
  dispatch(setSidRequest());
  try {
    const response = await axios.post('/login', {
      login: login,
      password: password,
    });
    dispatch(setSidSuccess({
      sid: response.data.sid,
    }));
    dispatch({
      type: ROUTING,
      payload: {
        method: 'push',
        nextUrl: '/index'
      }
    });
  } catch (error) {
    dispatch(setSidFail(error));
    alert('Введите логин и пароль, указанные при регистрации');
  }
};