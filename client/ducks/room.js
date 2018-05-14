import { defineAction } from 'redux-define'
import axios from '../lib/axios'

const GET_ALL_ROOM = defineAction('room/GET_ALL', ['ERROR', 'SUCCESS', 'LOADING'])
const GET_ROOM = defineAction('room/get', ['ERROR', 'SUCCESS', 'LOADING'])
const CREATE_ROOM = defineAction('room/create', ['ERROR', 'SUCCESS', 'LOADING'])
const EDIT_ROOM = defineAction('room/edit', ['ERROR', 'SUCCESS', 'LOADING'])
const DELETE_ROOM = defineAction('room/delete', ['ERROR', 'SUCCESS', 'LOADING'])

export const getAllRooms = () => {
  return async dispatch => {
    try {
      dispatch(getAllRoomsLoading(true))
      const { data } = await axios.get('/rooms')
      dispatch(getAllRoomsSuccess(data))
      dispatch(getAllRoomsLoading(false))
    } catch (err) {
      dispatch(getAllRoomsLoading(false))
      dispatch(getAllRoomsError(true))
    }
  }
}

export const getRoom = id => {
  return async dispatch => {
    try {
      dispatch(getRoomLoading(true))
      const { data } = await axios.get(`/rooms/${id}`)
      dispatch(getRoomSuccess(data))
      dispatch(getRoomLoading(false))
    } catch (err) {
      dispatch(getRoomLoading(false))
      dispatch(getRoomError(err))
    }
  }
}

export const createRoom = guideline => {
  return async dispatch => {
    try {
      dispatch(createRoomLoading(true))
      const { data } = await axios.post('/rooms', guideline)
      dispatch(createRoomSuccess(data))
      dispatch(createRoomLoading(false))
    } catch (err) {
      dispatch(createRoomLoading(false))
      dispatch(createRoomError(err))
    }
  }
}

export const editRoom = (id, guideline) => {
  return async dispatch => {
    try {
      dispatch(editRoomLoading(true))
      const { data } = await axios.put(`/rooms/${id}`, guideline)
      dispatch(editRoomSuccess(data))
      dispatch(editRoomLoading(false))
    } catch (err) {
      dispatch(editRoomLoading(false))
      dispatch(editRoomError(err))
    }
  }
}

export const deleteRoom = id => {
  return async dispatch => {
    try {
      dispatch(deleteRoomLoading(true))
      const { data } = await axios.delete(`/rooms/${id}`)
      dispatch(deleteRoomSuccess(data))
      dispatch(deleteRoomLoading(false))
    } catch (err) {
      dispatch(deleteRoomLoading(false))
      dispatch(deleteRoomError(err))
    }
  }
}

export const getAllRoomsLoading = isLoading => ({
  type: GET_ALL_ROOM.LOADING,
  payload: isLoading
})

export const getRoomLoading = isLoading => ({
  type: GET_ROOM.LOADING,
  payload: isLoading
})

export const createRoomLoading = isLoading => ({
  type: CREATE_ROOM.LOADING,
  payload: isLoading
})

export const editRoomLoading = isLoading => ({
  type: EDIT_ROOM.LOADING,
  payload: isLoading
})

export const deleteRoomLoading = isLoading => ({
  type: DELETE_ROOM.LOADING,
  payload: isLoading
})

export const getAllRoomsSuccess = data => ({
  type: GET_ALL_ROOM.SUCCESS,
  payload: data
})

export const getRoomSuccess = data => ({
  type: GET_ROOM.SUCCESS,
  payload: data
})

export const createRoomSuccess = data => ({
  type: GET_ROOM.SUCCESS,
  payload: data
})

export const editRoomSuccess = data => ({
  type: EDIT_ROOM.SUCCESS,
  payload: data
})

export const deleteRoomSuccess = data => ({
  type: DELETE_ROOM.SUCCESS,
  payload: data
})

export const getAllRoomsError = error => ({
  type: GET_ALL_ROOM.ERROR,
  payload: error
})

export const getRoomError = error => ({
  type: GET_ROOM.ERROR,
  payload: error
})

export const createRoomError = error => ({
  type: CREATE_ROOM.ERROR,
  payload: error
})

export const editRoomError = error => ({
  type: EDIT_ROOM.ERROR,
  payload: error
})

export const deleteRoomError = error => ({
  type: DELETE_ROOM.ERROR,
  payload: error
})

const initialState = {
  allRooms: [],
  room: {},
  loading: { isLoading: false, type: 'all' },
  error: undefined
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_ROOM.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'all' } }
    case GET_ROOM.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'get' } }
    case CREATE_ROOM.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'create' } }
    case EDIT_ROOM.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'edit' } }
    case DELETE_ROOM.LOADING:
      return { ...state, loading: { isLoading: payload, type: 'delete' } }
    case GET_ALL_ROOM.SUCCESS:
      return { ...state, allRooms: payload, error: undefined }
    case GET_ROOM.SUCCESS:
      return { ...state, room: payload, error: undefined }
    case CREATE_ROOM.SUCCESS:
      return { ...state, room: payload, error: undefined }
    case EDIT_ROOM.SUCCESS:
      return { ...state, room: payload, error: undefined }
    case DELETE_ROOM.SUCCESS:
      return { ...state, room: payload, error: undefined }
    case GET_ALL_ROOM.ERROR:
      return { ...state, allRooms: [], error: payload }
    case GET_ROOM.ERROR:
      return { ...state, room: [], error: payload }
    case CREATE_ROOM.ERROR:
      return { ...state, room: [], error: payload }
    case EDIT_ROOM.ERROR:
      return { ...state, room: [], error: payload }
    case DELETE_ROOM.ERROR:
      return { ...state, room: [], error: payload }
    default:
      return { ...state }
  }
}
