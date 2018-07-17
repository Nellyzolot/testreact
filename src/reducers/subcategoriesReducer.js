import {handleActions} from 'redux-actions';
import * as actions from '../constants/Subcategoties';

const initialState = {
  subcategories: [],
  currentIdCat: 0,
  isFetchingSub: true,
  error: {}
};

export default handleActions({
  [actions.GET_SUBCATEGORIESS_REQUEST]: state => ({
    ...state,
    currentIdCat:0,
    isFetchingSub: true,
    error: {},
  }),

  [actions.GET_SUBCATEGORIESS_SUCCESS]: (state, action) => ({
    ...state,
    subcategories: action.payload.subcategories,
    isFetchingSub: false,
    currentIdCat: action.payload.currentIdCat,
    error: {},
  }),

  [actions.GET_SUBCATEGORIESS_FAIL]: (state, action) => ({
    ...state,
    currentIdCat:0,
    isFetchingSub: true,
    error: action.payload.error,
  }),
}, initialState);