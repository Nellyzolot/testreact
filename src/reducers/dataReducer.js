import * as actions from '../constants/Data'

const initialState = {
  categories: [],
  subCategories:[],
  products:[],
  isFetching: true,
};

export default function (state = initialState, action) {

  switch (action.type) {

    case actions.GET_CATEGORIES:
      return Object.assign({}, state, {categories: action.payload.categories, isFetching: false});

    case actions.GET_SUBCATEGORIES:
      return Object.assign({}, state, {subCategories: action.payload.subCategories, isFetching: false});

    case actions.GET_PRODUCTS:
      return Object.assign({}, state, {products: action.payload.products, isFetching: false});

    default:
      return state;
  }
}