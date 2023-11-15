import React from 'react';
import {addPostActionCreator, setPostMessageActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    const state = props.store.getState()

    const addPost = () => {
        const action = addPostActionCreator()
        props.store.dispatch(action)
    }

    const onPostChange = (text) => {
        const action = setPostMessageActionCreator(text)
        props.store.dispatch(action)
    }

    return (
      <MyPosts
        updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePages.posts}
        newPostText={state.profilePages.newPostText}
      />
    )
};

export default MyPostsContainer;