import * as actions from '../constants/Data'

export function getCategories(payload) {
  return (dispatch) => {
    dispatch({
      type: actions.GET_CATEGORIES_SUCCESS,
      payload: {
        categories: payload.categories,
      }
    });
  }
}

export function getSubcategories(payload) {
  return (dispatch) => {
    dispatch({
      type: actions.GET_SUBCATEGORIES_SUCESS,
      payload: {
        subcategories: payload.subcategories,
        currentIdCat: payload.currentIdCat,
      }
    });
  }
}

export function getProducts(payload) {
  return (dispatch) => {
    dispatch({
      type: actions.GET_PRODUCTS_SUCESS,
      payload: {
        products: payload.products,
        currentIdSub: payload.currentIdSub,
      }
    });
  }
}