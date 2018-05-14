import { defineAction } from 'redux-define'
import axios from '../lib/axios'

const GET_ALL_STUDENT = defineAction('student/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_STUDENT = defineAction('student/get', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE_STUDENT = defineAction('student/create', ['ERROR', 'SUCCESS', 'LOADING'])
const EDIT_STUDENT = defineAction('student/edit', ['ERROR', 'SUCCESS', 'LOADING'])
const DELETE_STUDENT = defineAction('student/delete', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAllStudents = () => {
  return async dispatch => {
    try {
      dispatch(getAllStudentsLoading(true))
      const { data } = await axios.get('/rooms')
      dispatch(getAllStudentsSuccess(data))
      dispatch(getAllStudentsLoading(false))
    } catch (err) {
      dispatch(getAllStudentsLoading(false))
      dispatch(getAllStudentsError(true))
    }
  }
}

export const getStudent = id => {
  return async dispatch => {
    try {
      dispatch(getStudentLoading(true))
      const { data } = await axios.get(`/rooms/${id}`)
      dispatch(getStudentSuccess(data))
      dispatch(getStudentLoading(false))
    } catch (err) {
      dispatch(getStudentLoading(false))
      dispatch(getStudentError(err))
    }
  }
}

export const createStudent = guideline => {
  return async dispatch => {
    try {
      dispatch(createStudentLoading(true))
      const { data } = await axios.post('/rooms', guideline)
      dispatch(createStudentSuccess(data))
      dispatch(createStudentLoading(false))
    } catch (err) {
      dispatch(createStudentLoading(false))
      dispatch(createStudentError(err))
    }
  }
}

export const editStudent = (id, guideline) => {
  return async dispatch => {
    try {
      dispatch(editStudentLoading(true))
      const { data } = await axios.put(`/rooms/${id}`, guideline)
      dispatch(editStudentSuccess(data))
      dispatch(editStudentLoading(false))
    } catch (err) {
      dispatch(editStudentLoading(false))
      dispatch(editStudentError(err))
    }
  }
}

export const deleteStudent = id => {
  return async dispatch => {
    try {
      dispatch(deleteStudentLoading(true))
      const { data } = await axios.delete(`/rooms/${id}`)
      dispatch(deleteStudentSuccess(data))
      dispatch(deleteStudentLoading(false))
    } catch (err) {
      dispatch(deleteStudentLoading(false))
      dispatch(deleteStudentError(err))
    }
  }
}

export const getAllStudentsLoading = isLoading => ({
  type: GET_ALL_STUDENT.LOADING,
  payload: isLoading
})

export const getStudentLoading = isLoading => ({
  type: GET_STUDENT.LOADING,
  payload: isLoading
})

export const createStudentLoading = isLoading => ({
  type: CREATE_STUDENT.LOADING,
  payload: isLoading
})

export const editStudentLoading = isLoading => ({
  type: EDIT_STUDENT.LOADING,
  payload: isLoading
})

export const deleteStudentLoading = isLoading => ({
  type: DELETE_STUDENT.LOADING,
  payload: isLoading
})

export const getAllStudentsSuccess = data => ({
  type: GET_ALL_STUDENT.SUCCESS,
  payload: data
})

export const getStudentSuccess = data => ({
  type: GET_STUDENT.SUCCESS,
  payload: data
})

export const createStudentSuccess = data => ({
  type: GET_STUDENT.SUCCESS,
  payload: data
})

export const editStudentSuccess = data => ({
  type: EDIT_STUDENT.SUCCESS,
  payload: data
})

export const deleteStudentSuccess = data => ({
  type: DELETE_STUDENT.SUCCESS,
  payload: data
})

export const getAllStudentsError = error => ({
  type: GET_ALL_STUDENT.ERROR,
  payload: error
})

export const getStudentError = error => ({
  type: GET_STUDENT.ERROR,
  payload: error
})

export const createStudentError = error => ({
  type: CREATE_STUDENT.ERROR,
  payload: error
})

export const editStudentError = error => ({
  type: EDIT_STUDENT.ERROR,
  payload: error
})

export const deleteStudentError = error => ({
  type: DELETE_STUDENT.ERROR,
  payload: error
})

const initialState = {
  allStudents: [],
  student: {},
  loading: { isLoading: false, type: 'all' },
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_STUDENT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'all' } }
    case GET_STUDENT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'get' } }
    case CREATE_STUDENT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'create' } }
    case EDIT_STUDENT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'edit' } }
    case DELETE_STUDENT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'delete' } }
    case GET_ALL_STUDENT.SUCCESS:
      return { ...state, allStudents: payload, error: undefined }
    case GET_STUDENT.SUCCESS:
      return { ...state, student: payload, error: undefined }
    case CREATE_STUDENT.SUCCESS:
      return { ...state, student: payload, error: undefined }
    case EDIT_STUDENT.SUCCESS:
      return { ...state, student: payload, error: undefined }
    case DELETE_STUDENT.SUCCESS:
      return { ...state, student: payload, error: undefined }
    case GET_ALL_STUDENT.ERROR:
      return { ...state, allStudents: [], error: payload }
    case GET_STUDENT.ERROR:
      return { ...state, student: [], error: payload }
    case CREATE_STUDENT.ERROR:
      return { ...state, student: [], error: payload }
    case EDIT_STUDENT.ERROR:
      return { ...state, student: [], error: payload }
    case DELETE_STUDENT.ERROR:
      return { ...state, student: [], error: payload }
    default:
      return { ...state }
  }
}
