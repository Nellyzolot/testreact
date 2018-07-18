import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers'
import {redirect} from '../middlewares/redirect'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, redirect))

  return store
}