import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { redirect } from '../middlewares/redirect'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore (initialState) {
  const logger = createLogger();
  const store = createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk, logger, redirect))

  return store
}