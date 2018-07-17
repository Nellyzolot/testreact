import {createAction} from 'redux-actions';
import axios from 'axios';
import * as actions from '../constants/Product'

const getProductsRequest = createAction(
    actions.GET_PRODUCTS_REQUEST,
);

export const getProductsSuccess = createAction(
    actions.GET_PRODUCTS_SUCCESS
);

const getProductsFail = createAction(
    actions.GET_PRODUCTS_FAIL,
    error => ({error}),
);

export const getProducts = (id, sid) => async (dispatch) => {
  dispatch(getProductsRequest());
  try {
    const response = await axios.get('/products/' + id, {
      headers: {
        'sid': sid
      }
    });
    dispatch(getProductsSuccess({
        products: response.data,
        currentIdSub: id,
    }));
  } catch (error) {
    dispatch(getProductsFail(error));
  }
};