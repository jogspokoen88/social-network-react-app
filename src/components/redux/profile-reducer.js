import {profileAPI, usersAPI} from "../../Api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    {message: "Yellow greenback", likeCounts: "15"},
    {message: "React Redux", likeCounts: "19"},
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  let stateCopy = {...state}
  switch (action.type) {
    case ADD_POST: {
      let newPost = {message: action.newPostText, likeCounts: 0}
      return {...state, posts: [...state.posts, newPost], newPostText: ''}
    }
    case SET_USER_PROFILE: {
      return {...state, profile: action.profile}
    }
    case SET_STATUS: {
      return {...state, status: action.status}
    }
    case SAVE_PHOTO_SUCCESS: {
      return {...state, profile: {...state.profile, photos: action.photos}}
      }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => (dispatch) => {
 usersAPI.getProfile(userId).then(response => {
   console.log(response); dispatch(setUserProfile(response.data))
   })
}

export const getStatus = (userId) => (dispatch) => {
 profileAPI.getStatus(userId).then(response => {
   dispatch(setStatus(response.data))
   })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}))
    return Promise.reject(response.data.messages[0])
  }
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export default profileReducer;