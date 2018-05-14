import { defineAction } from 'redux-define'
import axios from '../lib/axios'

const GET_ALL_GUIDELINE = defineAction('guideline/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_GUIDELINE = defineAction('guideline/get', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE_GUIDELINE = defineAction('guideline/create', ['ERROR', 'SUCCESS', 'LOADING'])
const EDIT_GUIDELINE = defineAction('guideline/edit', ['ERROR', 'SUCCESS', 'LOADING'])
const DELETE_GUIDELINE = defineAction('guideline/delete', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAllGuidelines = () => {
  return async dispatch => {
    try {
      dispatch(getAllGuidelinesLoading(true))
      const { data } = await axios.get('/guidelines')
      dispatch(getAllGuidelinesSuccess(data))
      dispatch(getAllGuidelinesLoading(false))
    } catch (err) {
      dispatch(getAllGuidelinesLoading(false))
      dispatch(getAllGuidelinesError(true))
    }
  }
}

export const getGuideline = id => {
  return async dispatch => {
    try {
      dispatch(getGuidelineLoading(true))
      const { data } = await axios.get(`/guidelines/${id}`)
      dispatch(getGuidelineSuccess(data))
      dispatch(getGuidelineLoading(false))
    } catch (err) {
      dispatch(getGuidelineLoading(false))
      dispatch(getGuidelineError(err))
    }
  }
}

export const createGuideline = guideline => {
  return async dispatch => {
    try {
      dispatch(createGuidelineLoading(true))
      const { data } = await axios.post('/guidelines', guideline)
      dispatch(createGuidelineSuccess(data))
      dispatch(createGuidelineLoading(false))
    } catch (err) {
      dispatch(createGuidelineLoading(false))
      dispatch(createGuidelineError(err))
    }
  }
}

export const editGuideline = (id, guideline) => {
  return async dispatch => {
    try {
      dispatch(editGuidelineLoading(true))
      const { data } = await axios.put(`/guidelines/${id}`, guideline)
      dispatch(editGuidelineSuccess(data))
      dispatch(editGuidelineLoading(false))
    } catch (err) {
      dispatch(editGuidelineLoading(false))
      dispatch(editGuidelineError(err))
    }
  }
}

export const deleteGuideline = id => {
  return async dispatch => {
    try {
      dispatch(deleteGuidelineLoading(true))
      const { data } = await axios.delete(`/guidelines/${id}`)
      dispatch(deleteGuidelineSuccess(data))
      dispatch(deleteGuidelineLoading(false))
    } catch (err) {
      dispatch(deleteGuidelineLoading(false))
      dispatch(deleteGuidelineError(err))
    }
  }
}

export const getAllGuidelinesLoading = isLoading => ({
  type: GET_ALL_GUIDELINE.LOADING,
  payload: isLoading
})

export const getGuidelineLoading = isLoading => ({
  type: GET_GUIDELINE.LOADING,
  payload: isLoading
})

export const createGuidelineLoading = isLoading => ({
  type: CREATE_GUIDELINE.LOADING,
  payload: isLoading
})

export const editGuidelineLoading = isLoading => ({
  type: EDIT_GUIDELINE.LOADING,
  payload: isLoading
})

export const deleteGuidelineLoading = isLoading => ({
  type: DELETE_GUIDELINE.LOADING,
  payload: isLoading
})

export const getAllGuidelinesSuccess = data => ({
  type: GET_ALL_GUIDELINE.SUCCESS,
  payload: data
})

export const getGuidelineSuccess = data => ({
  type: GET_GUIDELINE.SUCCESS,
  payload: data
})

export const createGuidelineSuccess = data => ({
  type: GET_GUIDELINE.SUCCESS,
  payload: data
})

export const editGuidelineSuccess = data => ({
  type: EDIT_GUIDELINE.SUCCESS,
  payload: data
})

export const deleteGuidelineSuccess = data => ({
  type: DELETE_GUIDELINE.SUCCESS,
  payload: data
})

export const getAllGuidelinesError = error => ({
  type: GET_ALL_GUIDELINE.ERROR,
  payload: error
})

export const getGuidelineError = error => ({
  type: GET_GUIDELINE.ERROR,
  payload: error
})

export const createGuidelineError = error => ({
  type: CREATE_GUIDELINE.ERROR,
  payload: error
})

export const editGuidelineError = error => ({
  type: EDIT_GUIDELINE.ERROR,
  payload: error
})

export const deleteGuidelineError = error => ({
  type: DELETE_GUIDELINE.ERROR,
  payload: error
})

const initialState = {
  allGuidelines: [],
  guideline: {},
  loading: { isLoading: false, type: 'all' },
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_GUIDELINE.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'all' } }
    case GET_GUIDELINE.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'get' } }
    case CREATE_GUIDELINE.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'create' } }
    case EDIT_GUIDELINE.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'edit' } }
    case DELETE_GUIDELINE.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'delete' } }
    case GET_ALL_GUIDELINE.SUCCESS:
      return { ...state, allGuidelines: payload, error: undefined }
    case GET_GUIDELINE.SUCCESS:
      return { ...state, guideline: payload, error: undefined }
    case CREATE_GUIDELINE.SUCCESS:
      return { ...state, guideline: payload, error: undefined }
    case EDIT_GUIDELINE.SUCCESS:
      return { ...state, guideline: payload, error: undefined }
    case DELETE_GUIDELINE.SUCCESS:
      return { ...state, guideline: payload, error: undefined }
    case GET_ALL_GUIDELINE.ERROR:
      return { ...state, allGuidelines: [], error: payload }
    case GET_GUIDELINE.ERROR:
      return { ...state, guideline: [], error: payload }
    case CREATE_GUIDELINE.ERROR:
      return { ...state, guideline: [], error: payload }
    case EDIT_GUIDELINE.ERROR:
      return { ...state, guideline: [], error: payload }
    case DELETE_GUIDELINE.ERROR:
      return { ...state, guideline: [], error: payload }
    default:
      return { ...state }
  }
}
