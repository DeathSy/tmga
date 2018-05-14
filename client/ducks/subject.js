import { defineAction } from 'redux-define'
import axios from '../lib/axios'

const GET_ALL_SUBJECT = defineAction('subject/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_SUBJECT = defineAction('subject/get', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE_SUBJECT = defineAction('subject/create', ['ERROR', 'SUCCESS', 'LOADING'])
const EDIT_SUBJECT = defineAction('subject/edit', ['ERROR', 'SUCCESS', 'LOADING'])
const DELETE_SUBJECT = defineAction('subject/delete', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAllSubjects = () => {
  return async dispatch => {
    try {
      dispatch(getAllSubjectsLoading(true))
      const { data } = await axios.get('/subjects')
      dispatch(getAllSubjectsSuccess(data))
      dispatch(getAllSubjectsLoading(false))
    } catch (err) {
      dispatch(getAllSubjectsLoading(false))
      dispatch(getAllSubjectsError(true))
    }
  }
}

export const getSubject = id => {
  return async dispatch => {
    try {
      dispatch(getSubjectLoading(true))
      const { data } = await axios.get(`/subjects/${id}`)
      dispatch(getSubjectSuccess(data))
      dispatch(getSubjectLoading(false))
    } catch (err) {
      dispatch(getSubjectLoading(false))
      dispatch(getSubjectError(err))
    }
  }
}

export const createSubject = guideline => {
  return async dispatch => {
    try {
      dispatch(createSubjectLoading(true))
      const { data } = await axios.post('/subjects', guideline)
      dispatch(createSubjectSuccess(data))
      dispatch(createSubjectLoading(false))
    } catch (err) {
      dispatch(createSubjectLoading(false))
      dispatch(createSubjectError(err))
    }
  }
}

export const editSubject = (id, guideline) => {
  return async dispatch => {
    try {
      dispatch(editSubjectLoading(true))
      const { data } = await axios.put(`/subjects/${id}`, guideline)
      dispatch(editSubjectSuccess(data))
      dispatch(editSubjectLoading(false))
    } catch (err) {
      dispatch(editSubjectLoading(false))
      dispatch(editSubjectError(err))
    }
  }
}

export const deleteSubject = id => {
  return async dispatch => {
    try {
      dispatch(deleteSubjectLoading(true))
      const { data } = await axios.delete(`/subjects/${id}`)
      dispatch(deleteSubjectSuccess(data))
      dispatch(deleteSubjectLoading(false))
    } catch (err) {
      dispatch(deleteSubjectLoading(false))
      dispatch(deleteSubjectError(err))
    }
  }
}

export const getAllSubjectsLoading = isLoading => ({
  type: GET_ALL_SUBJECT.LOADING,
  payload: isLoading
})

export const getSubjectLoading = isLoading => ({
  type: GET_SUBJECT.LOADING,
  payload: isLoading
})

export const createSubjectLoading = isLoading => ({
  type: CREATE_SUBJECT.LOADING,
  payload: isLoading
})

export const editSubjectLoading = isLoading => ({
  type: EDIT_SUBJECT.LOADING,
  payload: isLoading
})

export const deleteSubjectLoading = isLoading => ({
  type: DELETE_SUBJECT.LOADING,
  payload: isLoading
})

export const getAllSubjectsSuccess = data => ({
  type: GET_ALL_SUBJECT.SUCCESS,
  payload: data
})

export const getSubjectSuccess = data => ({
  type: GET_SUBJECT.SUCCESS,
  payload: data
})

export const createSubjectSuccess = data => ({
  type: GET_SUBJECT.SUCCESS,
  payload: data
})

export const editSubjectSuccess = data => ({
  type: EDIT_SUBJECT.SUCCESS,
  payload: data
})

export const deleteSubjectSuccess = data => ({
  type: DELETE_SUBJECT.SUCCESS,
  payload: data
})

export const getAllSubjectsError = error => ({
  type: GET_ALL_SUBJECT.ERROR,
  payload: error
})

export const getSubjectError = error => ({
  type: GET_SUBJECT.ERROR,
  payload: error
})

export const createSubjectError = error => ({
  type: CREATE_SUBJECT.ERROR,
  payload: error
})

export const editSubjectError = error => ({
  type: EDIT_SUBJECT.ERROR,
  payload: error
})

export const deleteSubjectError = error => ({
  type: DELETE_SUBJECT.ERROR,
  payload: error
})

const initialState = {
  allSubjects: [],
  subject: {},
  loading: { isLoading: false, type: 'all' },
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SUBJECT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'all' } }
    case GET_SUBJECT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'get' } }
    case CREATE_SUBJECT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'create' } }
    case EDIT_SUBJECT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'edit' } }
    case DELETE_SUBJECT.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'delete' } }
    case GET_ALL_SUBJECT.SUCCESS:
      return { ...state, allSubjects: payload, error: undefined }
    case GET_SUBJECT.SUCCESS:
      return { ...state, subject: payload, error: undefined }
    case CREATE_SUBJECT.SUCCESS:
      return { ...state, subject: payload, error: undefined }
    case EDIT_SUBJECT.SUCCESS:
      return { ...state, subject: payload, error: undefined }
    case DELETE_SUBJECT.SUCCESS:
      return { ...state, subject: payload, error: undefined }
    case GET_ALL_SUBJECT.ERROR:
      return { ...state, allSubjects: [], error: payload }
    case GET_SUBJECT.ERROR:
      return { ...state, subject: [], error: payload }
    case CREATE_SUBJECT.ERROR:
      return { ...state, subject: [], error: payload }
    case EDIT_SUBJECT.ERROR:
      return { ...state, subject: [], error: payload }
    case DELETE_SUBJECT.ERROR:
      return { ...state, subject: [], error: payload }
    default:
      return { ...state }
  }
}
