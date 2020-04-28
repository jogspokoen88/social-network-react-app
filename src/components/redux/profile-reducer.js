import {profileAPI, usersAPI} from "../../Api/api";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

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

export const setStatus = (status) => ({type: SET_STATUS, status})

export default profileReducer;