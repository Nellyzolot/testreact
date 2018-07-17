import {handleActions} from 'redux-actions';
import * as actions from '../constants/Product';

const initialState = {
  products: [],
  currentIdSub: 0,
  error: {}
};

export default handleActions({
  [actions.GET_PRODUCTS_REQUEST]: state => ({
    ...state,
    currentIdSub: 0,
    error: {},
  }),

  [actions.GET_PRODUCTS_SUCCESS]: (state, action) => ({
    ...state,
    products: action.payload.products,
    currentIdSub: action.payload.currentIdSub,
    error: {},
  }),

  [actions.GET_PRODUCTS_FAIL]: (state, action) => ({
    ...state,
    currentIdSub: 0,
    error: action.payload.error,
  }),
}, initialState);