import {
  SET_SID
} from '../constants/Login'

const initialState = {
  sid: 0,
};

export default function (state = initialState, action) {

  switch (action.type) {

    case SET_SID:
      return Object.assign({}, state, {sid: action.payload.sid});

    default:
      return state;
  }
}