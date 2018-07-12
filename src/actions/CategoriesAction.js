import {
  GET_CATEGORIES,
} from '../constants/Categories'

export function getCategories(payload) {
  return (dispatch) => {
    dispatch({
      type: GET_CATEGORIES,
      payload: {
        categories: payload.categories,
      }
    });
  }
}