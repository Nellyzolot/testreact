import {handleActions} from 'redux-actions';
import * as actions from '../constants/Login';

const initialState = {
  sid: 0,
  error: {}
};

export default handleActions({
  [actions.SET_SID_REQUEST]: state => ({
    ...state,
    error: {},
  }),

  [actions.SET_SID_SUCCESS]: (state, action) => ({
    ...state,
    sid: action.payload.sid,
    error: {},
  }),

  [actions.SET_SID_FAIL]: (state, action) => ({
    ...state,
    error: action.payload.error,
  }),
}, initialState);