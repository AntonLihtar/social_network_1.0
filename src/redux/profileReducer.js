import {usersAPI} from "../api/api";

export const ADD_POST = "ADD_POST";
export const SET_POST_TEXT = "SET_POST_TEXT";
export const SET_USER_PROFILE = "SET_USER_PROFILE";

const initialState = {
    posts: [
        {id: 1, message: "Hello , this is 1 message", likesCount: 10},
        {id: 2, message: "Post #2 good", likesCount: 33},
        {id: 3, message: "Post #3", likesCount: 5},
        {id: 4, message: "Post 4 goodbye", likesCount: 18},
    ],
    newPostText: "helloText",
    profile: null
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case SET_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newMessage
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setPostMessageActionCreator = (text) => ({type: SET_POST_TEXT, newMessage: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}


export default profileReducer