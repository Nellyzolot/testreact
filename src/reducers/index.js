import { combineReducers } from 'redux'
import login from './login'
import categories from './categories'

export default combineReducers({
  login,
  categories
})