import { defineAction } from 'redux-define'
import axios from '../lib/axios'

const GET_ALL_SECTION = defineAction('room/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_SECTION = defineAction('room/get', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE_SECTION = defineAction('room/create', ['ERROR', 'SUCCESS', 'LOADING'])
const EDIT_SECTION = defineAction('room/edit', ['ERROR', 'SUCCESS', 'LOADING'])
const DELETE_SECTION = defineAction('room/delete', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAllSections = () => {
  return async dispatch => {
    try {
      dispatch(getAllSectionsLoading(true))
      const { data } = await axios.get('/rooms')
      dispatch(getAllSectionsSuccess(data))
      dispatch(getAllSectionsLoading(false))
    } catch (err) {
      dispatch(getAllSectionsLoading(false))
      dispatch(getAllSectionsError(true))
    }
  }
}

export const getSection = id => {
  return async dispatch => {
    try {
      dispatch(getSectionLoading(true))
      const { data } = await axios.get(`/rooms/${id}`)
      dispatch(getSectionSuccess(data))
      dispatch(getSectionLoading(false))
    } catch (err) {
      dispatch(getSectionLoading(false))
      dispatch(getSectionError(err))
    }
  }
}

export const createSection = guideline => {
  return async dispatch => {
    try {
      dispatch(createSectionLoading(true))
      const { data } = await axios.post('/rooms', guideline)
      dispatch(createSectionSuccess(data))
      dispatch(createSectionLoading(false))
    } catch (err) {
      dispatch(createSectionLoading(false))
      dispatch(createSectionError(err))
    }
  }
}

export const editSection = (id, guideline) => {
  return async dispatch => {
    try {
      dispatch(editSectionLoading(true))
      const { data } = await axios.put(`/rooms/${id}`, guideline)
      dispatch(editSectionSuccess(data))
      dispatch(editSectionLoading(false))
    } catch (err) {
      dispatch(editSectionLoading(false))
      dispatch(editSectionError(err))
    }
  }
}

export const deleteSection = id => {
  return async dispatch => {
    try {
      dispatch(deleteSectionLoading(true))
      const { data } = await axios.delete(`/rooms/${id}`)
      dispatch(deleteSectionSuccess(data))
      dispatch(deleteSectionLoading(false))
    } catch (err) {
      dispatch(deleteSectionLoading(false))
      dispatch(deleteSectionError(err))
    }
  }
}

export const getAllSectionsLoading = isLoading => ({
  type: GET_ALL_SECTION.LOADING,
  payload: isLoading
})

export const getSectionLoading = isLoading => ({
  type: GET_SECTION.LOADING,
  payload: isLoading
})

export const createSectionLoading = isLoading => ({
  type: CREATE_SECTION.LOADING,
  payload: isLoading
})

export const editSectionLoading = isLoading => ({
  type: EDIT_SECTION.LOADING,
  payload: isLoading
})

export const deleteSectionLoading = isLoading => ({
  type: DELETE_SECTION.LOADING,
  payload: isLoading
})

export const getAllSectionsSuccess = data => ({
  type: GET_ALL_SECTION.SUCCESS,
  payload: data
})

export const getSectionSuccess = data => ({
  type: GET_SECTION.SUCCESS,
  payload: data
})

export const createSectionSuccess = data => ({
  type: GET_SECTION.SUCCESS,
  payload: data
})

export const editSectionSuccess = data => ({
  type: EDIT_SECTION.SUCCESS,
  payload: data
})

export const deleteSectionSuccess = data => ({
  type: DELETE_SECTION.SUCCESS,
  payload: data
})

export const getAllSectionsError = error => ({
  type: GET_ALL_SECTION.ERROR,
  payload: error
})

export const getSectionError = error => ({
  type: GET_SECTION.ERROR,
  payload: error
})

export const createSectionError = error => ({
  type: CREATE_SECTION.ERROR,
  payload: error
})

export const editSectionError = error => ({
  type: EDIT_SECTION.ERROR,
  payload: error
})

export const deleteSectionError = error => ({
  type: DELETE_SECTION.ERROR,
  payload: error
})

const initialState = {
  allSections: [],
  section: {},
  loading: { isLoading: false, type: 'all' },
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_SECTION.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'all' } }
    case GET_SECTION.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'get' } }
    case CREATE_SECTION.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'create' } }
    case EDIT_SECTION.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'edit' } }
    case DELETE_SECTION.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'delete' } }
    case GET_ALL_SECTION.SUCCESS:
      return { ...state, allSections: payload, error: undefined }
    case GET_SECTION.SUCCESS:
      return { ...state, section: payload, error: undefined }
    case CREATE_SECTION.SUCCESS:
      return { ...state, section: payload, error: undefined }
    case EDIT_SECTION.SUCCESS:
      return { ...state, section: payload, error: undefined }
    case DELETE_SECTION.SUCCESS:
      return { ...state, section: payload, error: undefined }
    case GET_ALL_SECTION.ERROR:
      return { ...state, allSections: [], error: payload }
    case GET_SECTION.ERROR:
      return { ...state, section: [], error: payload }
    case CREATE_SECTION.ERROR:
      return { ...state, section: [], error: payload }
    case EDIT_SECTION.ERROR:
      return { ...state, section: [], error: payload }
    case DELETE_SECTION.ERROR:
      return { ...state, section: [], error: payload }
    default:
      return { ...state }
  }
}
