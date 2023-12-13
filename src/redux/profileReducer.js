import {profileAPI, usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST";
export const SET_USER_PROFILE = "SET_USER_PROFILE";
export const SET_USER_PROFILE_STATUS = "SET_USER_PROFILE_STATUS";

const initialState = {
    posts: [
        {id: 1, message: "Hello , this is 1 message", likesCount: 10},
        {id: 2, message: "Post #2 good", likesCount: 33},
        {id: 3, message: "Post #3", likesCount: 5},
        {id: 4, message: "Post 4 goodbye", likesCount: 18},
    ],
    profile: null,
    profileStatus: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: action.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }

        case SET_USER_PROFILE_STATUS: {
            return {
                ...state,
                profileStatus: action.status
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserProfileStatus = (status) => ({type: SET_USER_PROFILE_STATUS, status})

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}

export const getProfileStatus = (userId) => (dispatch) => {
    profileAPI.getProfileStatus(userId).then(data => {
        dispatch(setUserProfileStatus(data))
    })
}

export const setProfileStatus = (status) => (dispatch) => {
    profileAPI.setProfileStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserProfileStatus(status))
        }
    })
}

export default profileReducer