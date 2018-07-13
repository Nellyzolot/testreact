import * as actions from '../constants/Data'
import {ROUTING} from "../constants/Routing";

export function getCategories(payload) {
  return (dispatch) => {
    dispatch({
      type: actions.GET_CATEGORIES,
      payload: {
        categories: payload.categories,
      }
    });
  }
}

export function getSubCategories(payload) {
  return (dispatch) => {
    dispatch({
      type: actions.GET_SUBCATEGORIES,
      payload: {
        subCategories: payload.subCategories,
      }
    });
  }
}

export function getProducts(payload) {
  return (dispatch) => {
    dispatch({
      type: actions.GET_PRODUCTS,
      payload: {
        products: payload.products,
      }
    });
  }
}