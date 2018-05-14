import { defineAction } from 'redux-define'
import axios from '../lib/axios'

const GET_ALL_TIMESLOT = defineAction('timeSlot/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_TIMESLOT = defineAction('timeSlot/get', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE_TIMESLOT = defineAction('timeSlot/create', ['ERROR', 'SUCCESS', 'LOADING'])
const EDIT_TIMESLOT = defineAction('timeSlot/edit', ['ERROR', 'SUCCESS', 'LOADING'])
const DELETE_TIMESLOT = defineAction('timeSlot/delete', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAlltimeSlots = () => {
  return async dispatch => {
    try {
      dispatch(getAllTimeSlotsLoading(true))
      const { data } = await axios.get('/timeSlots')
      dispatch(getAllTimeSlotsSuccess(data))
      dispatch(getAllTimeSlotsLoading(false))
    } catch (err) {
      dispatch(getAllTimeSlotsLoading(false))
      dispatch(getAllTimeSlotsError(true))
    }
  }
}

export const getTimeSlot = id => {
  return async dispatch => {
    try {
      dispatch(getTimeSlotLoading(true))
      const { data } = await axios.get(`/timeSlots/${id}`)
      dispatch(getTimeSlotSuccess(data))
      dispatch(getTimeSlotLoading(false))
    } catch (err) {
      dispatch(getTimeSlotLoading(false))
      dispatch(getTimeSlotError(err))
    }
  }
}

export const createTimeSlot = guideline => {
  return async dispatch => {
    try {
      dispatch(createTimeSlotLoading(true))
      const { data } = await axios.post('/timeSlots', guideline)
      dispatch(createTimeSlotSuccess(data))
      dispatch(createTimeSlotLoading(false))
    } catch (err) {
      dispatch(createTimeSlotLoading(false))
      dispatch(createTimeSlotError(err))
    }
  }
}

export const editTimeSlot = (id, guideline) => {
  return async dispatch => {
    try {
      dispatch(editTimeSlotLoading(true))
      const { data } = await axios.put(`/timeSlots/${id}`, guideline)
      dispatch(editTimeSlotSuccess(data))
      dispatch(editTimeSlotLoading(false))
    } catch (err) {
      dispatch(editTimeSlotLoading(false))
      dispatch(editTimeSlotError(err))
    }
  }
}

export const deleteTimeSlot = id => {
  return async dispatch => {
    try {
      dispatch(deleteTimeSlotLoading(true))
      const { data } = await axios.delete(`/timeSlots/${id}`)
      dispatch(deleteTimeSlotSuccess(data))
      dispatch(deleteTimeSlotLoading(false))
    } catch (err) {
      dispatch(deleteTimeSlotLoading(false))
      dispatch(deleteTimeSlotError(err))
    }
  }
}

export const getAllTimeSlotsLoading = isLoading => ({
  type: GET_ALL_TIMESLOT.LOADING,
  payload: isLoading
})

export const getTimeSlotLoading = isLoading => ({
  type: GET_TIMESLOT.LOADING,
  payload: isLoading
})

export const createTimeSlotLoading = isLoading => ({
  type: CREATE_TIMESLOT.LOADING,
  payload: isLoading
})

export const editTimeSlotLoading = isLoading => ({
  type: EDIT_TIMESLOT.LOADING,
  payload: isLoading
})

export const deleteTimeSlotLoading = isLoading => ({
  type: DELETE_TIMESLOT.LOADING,
  payload: isLoading
})

export const getAllTimeSlotsSuccess = data => ({
  type: GET_ALL_TIMESLOT.SUCCESS,
  payload: data
})

export const getTimeSlotSuccess = data => ({
  type: GET_TIMESLOT.SUCCESS,
  payload: data
})

export const createTimeSlotSuccess = data => ({
  type: GET_TIMESLOT.SUCCESS,
  payload: data
})

export const editTimeSlotSuccess = data => ({
  type: EDIT_TIMESLOT.SUCCESS,
  payload: data
})

export const deleteTimeSlotSuccess = data => ({
  type: DELETE_TIMESLOT.SUCCESS,
  payload: data
})

export const getAllTimeSlotsError = error => ({
  type: GET_ALL_TIMESLOT.ERROR,
  payload: error
})

export const getTimeSlotError = error => ({
  type: GET_TIMESLOT.ERROR,
  payload: error
})

export const createTimeSlotError = error => ({
  type: CREATE_TIMESLOT.ERROR,
  payload: error
})

export const editTimeSlotError = error => ({
  type: EDIT_TIMESLOT.ERROR,
  payload: error
})

export const deleteTimeSlotError = error => ({
  type: DELETE_TIMESLOT.ERROR,
  payload: error
})

const initialState = {
  allTimeSlot: [],
  timeSlot: {},
  loading: { isLoading: false, type: 'all' },
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TIMESLOT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'all' } }
    case GET_TIMESLOT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'get' } }
    case CREATE_TIMESLOT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'create' } }
    case EDIT_TIMESLOT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'edit' } }
    case DELETE_TIMESLOT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'delete' } }
    case GET_ALL_TIMESLOT.SUCCESS:
      return { ...state, allTimeSlots: payload, error: undefined }
    case GET_TIMESLOT.SUCCESS:
      return { ...state, timeslot: payload, error: undefined }
    case CREATE_TIMESLOT.SUCCESS:
      return { ...state, timeslot: payload, error: undefined }
    case EDIT_TIMESLOT.SUCCESS:
      return { ...state, timeslot: payload, error: undefined }
    case DELETE_TIMESLOT.SUCCESS:
      return { ...state, timeslot: payload, error: undefined }
    case GET_ALL_TIMESLOT.ERROR:
      return { ...state, allTimeSlots: [], error: payload }
    case GET_TIMESLOT.ERROR:
      return { ...state, timeslot: [], error: payload }
    case CREATE_TIMESLOT.ERROR:
      return { ...state, timeslot: [], error: payload }
    case EDIT_TIMESLOT.ERROR:
      return { ...state, timeslot: [], error: payload }
    case DELETE_TIMESLOT.ERROR:
      return { ...state, timeslot: [], error: payload }
    default:
      return { ...state }
  }
}
