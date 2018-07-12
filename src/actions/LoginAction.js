import {
  SET_SID,
} from '../constants/Login'

import {
  ROUTING
} from '../constants/Routing'

export function login(payload) {
  return (dispatch) => {
      dispatch({
        type: SET_SID,
        payload: {
          sid: payload.sid
        }
      })

      dispatch({
        type: ROUTING,
        payload: {
          method: 'push',
          nextUrl: '/getcategory'
        }
      })
  }
}