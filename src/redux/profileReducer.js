export const ADD_POST = "ADD_POST";
export const SET_POST_TEXT = "SET_POST_TEXT";

const initialState = {
    posts: [
        {id: 1, message: "Hello , this is 1 message", likesCount: 10},
        {id: 2, message: "Post #2 good", likesCount: 33},
        {id: 3, message: "Post #3", likesCount: 5},
        {id: 4, message: "Post 4 goodbye", likesCount: 18},
    ],
    newPostText: "helloText",
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case SET_POST_TEXT:
            state.newPostText = action.newMessage
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const setPostMessageActionCreator = (text) => {
    return {
        type: SET_POST_TEXT,
        newMessage: text
    }
}

export default profileReducer