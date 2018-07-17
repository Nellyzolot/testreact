import {handleActions} from 'redux-actions';
import * as actions from '../constants/Categories';

const initialState = {
  categories: [],
  isFetchingCat: true,
  error: {}
};

export default handleActions({
  [actions.GET_CATEGORIES_REQUEST]: state => ({
    ...state,
    isFetchingCat: true,
    error: {},
  }),

  [actions.GET_CATEGORIES_SUCCESS]: (state, action) => ({
    ...state,
    categories: action.payload.categories,
    isFetchingCat: false,
    error: {},
  }),

  [actions.GET_CATEGORIES_FAIL]: (state, action) => ({
    ...state,
    isFetchingCat: true,
    error: action.payload.error,
  }),
}, initialState);