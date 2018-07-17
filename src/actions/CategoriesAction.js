import {createAction} from 'redux-actions';
import axios from 'axios';
import * as actions from '../constants/Categories'

const getCategoriesRequest = createAction(
    actions.GET_CATEGORIES_REQUEST,
);

export const getCategoriesSuccess = createAction(
    actions.GET_CATEGORIES_SUCCESS
);

const getCategoriesFail = createAction(
    actions.GET_CATEGORIES_FAIL,
    error => ({error}),
);

export const getCategories = (sid) => async (dispatch) => {
  dispatch(getCategoriesRequest());
  try {
    const response = await axios.get('/categories', {
      headers: {
        'sid': sid
      }
    });
    dispatch(getCategoriesSuccess({
      categories: response.data,
    }));
  } catch (error) {
    dispatch(getCategoriesFail(error));
  }
};