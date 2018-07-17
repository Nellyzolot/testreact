import {createAction} from 'redux-actions';
import axios from 'axios';
import * as actions from '../constants/Subcategoties'

const getSubcategoriesRequest = createAction(
    actions.GET_SUBCATEGORIESS_REQUEST,
);

export const getSubcategoriesSuccess = createAction(
    actions.GET_SUBCATEGORIESS_SUCCESS
);

const getSubcategoriesFail = createAction(
    actions.GET_SUBCATEGORIESS_FAIL,
    error => ({error}),
);

export const getSubcategories = (id, sid) => async (dispatch) => {
  dispatch(getSubcategoriesRequest());
  try {
    const response = await axios.get('/categories/' + id, {
      headers: {
        'sid': sid
      }
    });
    dispatch(getSubcategoriesSuccess({
      subcategories: response.data,
      currentIdCat: id,
    }));
  } catch (error) {
    dispatch(getSubcategoriesFail(error));
  }
};