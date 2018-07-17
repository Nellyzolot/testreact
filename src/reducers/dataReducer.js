import * as actions from '../constants/Data'

const initialState = {
  categories: [],
  subcategories:[],
  products:[],
  isFetchingCat: true,
  currentIdCat:0,
  currentIdSub:0,
};

export default function (state = initialState, action) {

  switch (action.type) {

    case actions.GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, {categories: action.payload.categories, isFetchingCat: false});

    case actions.GET_SUBCATEGORIES:
      return Object.assign({}, state, {subcategories: action.payload.subcategories, currentIdCat: action.payload.currentIdCat});

    case actions.GET_PRODUCTS:
      return Object.assign({}, state, {products: action.payload.products, currentIdSub: action.payload.currentIdSub});

    default:
      return state;
  }
}