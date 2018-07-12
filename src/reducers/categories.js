import {
  GET_CATEGORIES
} from '../constants/Categories'

const initialState = {
  categories: [],
  isFetching: false,
};

export default function (state = initialState, action) {

  switch (action.type) {

    case GET_CATEGORIES:
      return Object.assign({}, state, {categories: action.payload.categories, isFetching: true});

    default:
      return state;
  }
}