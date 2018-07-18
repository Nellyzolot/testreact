import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import categoriesReducer from './categoriesReducer'
import subcategoriesReducer from './subcategoriesReducer'
import productReducer from './productReducer'

export default combineReducers({
  loginReducer,
  categoriesReducer,
  subcategoriesReducer,
  productReducer,
})