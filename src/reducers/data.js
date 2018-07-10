import {
  GET_DATA
} from '../constants/Data'

const initialState = {
  data: {},
};

export default function (state = initialState, action) {

  switch (action.type) {

    case GET_DATA:
      return Object.assign({}, state, {data: action.payload.data});

    default:
      return state;
  }
}