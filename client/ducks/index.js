import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { reducer as form } from 'redux-form'

import guideline from './guideline'
import lecturer from './lecturer'
import room from './room'
import section from './section'
import student from './student'
import subject from './subject'
import timeSlot from './timeslot'
import period from './period'

const reducers = combineReducers({
  form,
  guideline,
  lecturer,
  room,
  section,
  student,
  subject,
  timeSlot,
  period
})

const middlewares = [thunk, logger]

export default initialState => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares))
}
