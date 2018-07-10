import {
  GET_DATA,
} from '../constants/Data'

export function getData(payload) {
  return (dispatch) => {
    dispatch({
      type: GET_DATA,
      payload: {
        data: payload.data
      }
    })
  }
}