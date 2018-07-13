import * as actions from '../constants/Data'

const initialState = {
  categories: [],
  subCategories:[],
  products:[],
  isFetchingCat: true,
  isFetchingSub: true,
  isFetchingProd: true,
  currentIdCat:0,
  currentIdSub:0,
};

export default function (state = initialState, action) {

  switch (action.type) {

    case actions.GET_CATEGORIES:
      return Object.assign({}, state, {categories: action.payload.categories, isFetchingCat: false});

    case actions.GET_SUBCATEGORIES:
      return Object.assign({}, state, {subCategories: action.payload.subCategories, isFetchingSub: false, currentIdCat: action.payload.currentIdCat});

    case actions.GET_PRODUCTS:
      return Object.assign({}, state, {products: action.payload.products, isFetchingProd: false, currentIdSub: action.payload.currentIdSub});

    default:
      return state;
  }
}