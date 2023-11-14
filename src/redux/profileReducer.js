export const ADD_POST = "ADD_POST";
export const SET_POST_TEXT = "SET_POST_TEXT";

const profileReducer = (state, action) => {
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