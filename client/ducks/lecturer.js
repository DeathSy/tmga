import { defineAction } from 'redux-define'
import axios from '../lib/axios'

const GET_ALL_LECTURER = defineAction('lecturer/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_LECTURER = defineAction('lecturer/get', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE_LECTURER = defineAction('lecturer/create', ['ERROR', 'SUCCESS', 'LOADING'])
const EDIT_LECTURER = defineAction('lecturer/edit', ['ERROR', 'SUCCESS', 'LOADING'])
const DELETE_LECTURER = defineAction('lecturer/delete', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAllLecturers = () => {
  return async dispatch => {
    try {
      dispatch(getAllLecturersLoading(true))
      const { data } = await axios.get('/lecturers')
      dispatch(getAllLecturersSuccess(data))
      dispatch(getAllLecturersLoading(false))
    } catch (err) {
      dispatch(getAllLecturersLoading(false))
      dispatch(getAllLecturersError(true))
    }
  }
}

export const getLecturer = id => {
  return async dispatch => {
    try {
      dispatch(getLecturerLoading(true))
      const { data } = await axios.get(`/lecturers/${id}`)
      dispatch(getLecturerSuccess(data))
      dispatch(getLecturerLoading(false))
    } catch (err) {
      dispatch(getLecturerLoading(false))
      dispatch(getLecturerError(err))
    }
  }
}

export const createLecturer = guideline => {
  return async dispatch => {
    try {
      dispatch(createLecturerLoading(true))
      const { data } = await axios.post('/lecturers', guideline)
      dispatch(createLecturerSuccess(data))
      dispatch(createLecturerLoading(false))
    } catch (err) {
      dispatch(createLecturerLoading(false))
      dispatch(createLecturerError(err))
    }
  }
}

export const editLecturer = (id, guideline) => {
  return async dispatch => {
    try {
      dispatch(editLecturerLoading(true))
      const { data } = await axios.put(`/lecturers/${id}`, guideline)
      dispatch(editLecturerSuccess(data))
      dispatch(editLecturerLoading(false))
    } catch (err) {
      dispatch(editLecturerLoading(false))
      dispatch(editLecturerError(err))
    }
  }
}

export const deleteLecturer = id => {
  return async dispatch => {
    try {
      dispatch(deleteLecturerLoading(true))
      const { data } = await axios.delete(`/lecturers/${id}`)
      dispatch(deleteLecturerSuccess(data))
      dispatch(deleteLecturerLoading(false))
    } catch (err) {
      dispatch(deleteLecturerLoading(false))
      dispatch(deleteLecturerError(err))
    }
  }
}

export const getAllLecturersLoading = isLoading => ({
  type: GET_ALL_LECTURER.LOADING,
  payload: isLoading
})

export const getLecturerLoading = isLoading => ({
  type: GET_LECTURER.LOADING,
  payload: isLoading
})

export const createLecturerLoading = isLoading => ({
  type: CREATE_LECTURER.LOADING,
  payload: isLoading
})

export const editLecturerLoading = isLoading => ({
  type: EDIT_LECTURER.LOADING,
  payload: isLoading
})

export const deleteLecturerLoading = isLoading => ({
  type: DELETE_LECTURER.LOADING,
  payload: isLoading
})

export const getAllLecturersSuccess = data => ({
  type: GET_ALL_LECTURER.SUCCESS,
  payload: data
})

export const getLecturerSuccess = data => ({
  type: GET_LECTURER.SUCCESS,
  payload: data
})

export const createLecturerSuccess = data => ({
  type: GET_LECTURER.SUCCESS,
  payload: data
})

export const editLecturerSuccess = data => ({
  type: EDIT_LECTURER.SUCCESS,
  payload: data
})

export const deleteLecturerSuccess = data => ({
  type: DELETE_LECTURER.SUCCESS,
  payload: data
})

export const getAllLecturersError = error => ({
  type: GET_ALL_LECTURER.ERROR,
  payload: error
})

export const getLecturerError = error => ({
  type: GET_LECTURER.ERROR,
  payload: error
})

export const createLecturerError = error => ({
  type: CREATE_LECTURER.ERROR,
  payload: error
})

export const editLecturerError = error => ({
  type: EDIT_LECTURER.ERROR,
  payload: error
})

export const deleteLecturerError = error => ({
  type: DELETE_LECTURER.ERROR,
  payload: error
})

const initialState = {
  allLecturers: [],
  lecturer: {},
  loading: { isLoading: false, type: 'all' },
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_LECTURER.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'all' } }
    case GET_LECTURER.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'get' } }
    case CREATE_LECTURER.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'create' } }
    case EDIT_LECTURER.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'edit' } }
    case DELETE_LECTURER.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'delete' } }
    case GET_ALL_LECTURER.SUCCESS:
      return { ...state, allLecturers: payload, error: undefined }
    case GET_LECTURER.SUCCESS:
      return { ...state, lecturer: payload, error: undefined }
    case CREATE_LECTURER.SUCCESS:
      return { ...state, lecturer: payload, error: undefined }
    case EDIT_LECTURER.SUCCESS:
      return { ...state, lecturer: payload, error: undefined }
    case DELETE_LECTURER.SUCCESS:
      return { ...state, lecturer: payload, error: undefined }
    case GET_ALL_LECTURER.ERROR:
      return { ...state, allLecturers: [], error: payload }
    case GET_LECTURER.ERROR:
      return { ...state, lecturer: [], error: payload }
    case CREATE_LECTURER.ERROR:
      return { ...state, lecturer: [], error: payload }
    case EDIT_LECTURER.ERROR:
      return { ...state, lecturer: [], error: payload }
    case DELETE_LECTURER.ERROR:
      return { ...state, lecturer: [], error: payload }
    default:
      return { ...state }
  }
}
