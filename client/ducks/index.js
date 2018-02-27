import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer as form } from 'redux-form'

const reducers = combineReducers({
  form
})

const middlewares = [thunk, logger]

export default initialState => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares))
}
