import { defineAction } from 'redux-define'
import axios from '../lib/axios'
import Axios from 'axios'

const GET_ALL_TIMETABLE = defineAction('period/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_TIMETABLE = defineAction('period/GET', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_STATUS = defineAction('period/STATUS', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE = defineAction('period/CREATE', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAllTimeTable = () => {
  return async dispatch => {
    try {
      dispatch(getAllTimeTableLoading(true))
      const { data } = await axios.get('/periods')
      dispatch(getAllTimeTableLoading(false))
      dispatch(getAllTimeTableSuccess(data))
    } catch (err) {
      dispatch(getAllTimeTableLoading(false))
      dispatch(getAllTimeTableError(err))
    }
  }
}

export const getTimetableStatus = () => {
  return async dispatch => {
    try {
      dispatch(getTimetableStatusLoading(true))
      const { data } = await Axios.get('http://localhost:5000/api/v1/generate/status')
      dispatch(getTimetableStatusLoading(false))
      dispatch(getTimetableStatusSuccess(data))
    } catch (err) {
      dispatch(getTimetableStatusLoading(false))
      dispatch(getTimetableStatusError(err))
    }
  }
}

export const getTimetable = id => {
  return async dispatch => {
    try {
      dispatch(getTimetableStatusLoading(true))
      const { data } = await axios.get(`/periods/${id}`)
      dispatch(getTimetableStatusLoading(false))
      dispatch(getTimetableStatusSuccess(data))
    } catch (err) {
      dispatch(getTimetableStatusLoading(false))
      dispatch(getTimetableStatusError(err))
    }
  }
}

export const createTimetable = () => {
  return async dispatch => {
    try {
      const { data } = await Axios.get('http://localhost:5000/api/v1/generate')
      dispatch(createTimetableSuccess(data))
    } catch (err) {
      dispatch(createTimetableError(err))
    }
  }
}

export const getTimetableLoading = isLoading => ({
  type: GET_TIMETABLE.LOADING,
  payload: isLoading
})

export const getAllTimeTableLoading = isLoading => ({
  type: GET_ALL_TIMETABLE.LOADING,
  payload: isLoading
})

export const getTimetableStatusLoading = isLoading => ({
  type: GET_STATUS.LOADING,
  payload: isLoading
})

export const getAllTimeTableSuccess = timetable => ({
  type: GET_ALL_TIMETABLE.SUCCESS,
  payload: timetable
})

export const getTimetableSuccess = timetable => ({
  type: GET_TIMETABLE.SUCCESS,
  payload: timetable
})

export const getTimetableStatusSuccess = status => ({
  type: GET_STATUS.SUCCESS,
  payload: status
})

export const createTimetableSuccess = response => ({
  type: CREATE.SUCCESS,
  payload: response
})

export const getAllTimeTableError = err => ({
  type: GET_ALL_TIMETABLE.ERROR,
  payload: err
})

export const getTimetableStatusError = err => ({
  type: GET_STATUS.ERROR,
  payload: err
})

export const createTimetableError = err => ({
  type: CREATE.ERROR,
  payload: err
})

const initialState = {
  allTimetables: [],
  timetable: {},
  loading: false,
  createResponse: undefined,
  status: 0,
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TIMETABLE.LOADING:
      return {
        ...state,
        loading: payload,
        allTimetables: []
      }
    case GET_TIMETABLE.LOADING:
      return {
        ...state,
        loading: {},
        timetable: payload
      }
    case GET_STATUS.LOADING:
      return {
        ...state,
        loading: payload,
        status: 0
      }
    case GET_ALL_TIMETABLE.SUCCESS:
      return {
        ...state,
        allTimetables: payload,
        error: undefined
      }
    case GET_TIMETABLE.SUCCESS:
      return {
        ...state,
        timetable: payload,
        error: undefined
      }
    case GET_STATUS.SUCCESS:
      return {
        ...state,
        status: payload
      }
    case CREATE.SUCCESS:
      return {
        ...state,
        createResponse: payload,
        error: undefined
      }
    case GET_ALL_TIMETABLE.ERROR:
      return {
        ...state,
        allTimetables: [],
        error: payload
      }
    case GET_STATUS.ERROR:
      return {
        ...state,
        status: 0,
        error: payload
      }
    case GET_TIMETABLE.ERROR:
      return {
        ...state,
        timetable: {},
        error: payload
      }
    case CREATE.ERROR: {
      return {
        ...state,
        allTimetables: [],
        error: payload
      }
    }
    default:
      return { ...state }
  }
}
