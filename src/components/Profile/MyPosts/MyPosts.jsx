import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostActionCreator, setPostMessageActionCreator} from "../../../redux/profileReducer";


const MyPosts = ({posts, newPostText, dispatch}) => {

    const refTextArea = React.createRef()

    const onchangeTextarea = () => {
        const text = refTextArea.current.value
        dispatch(setPostMessageActionCreator(text))
    }

    const addPost = () => {
        dispatch(addPostActionCreator())
    }

    return (
      <div className={classes.content}>
          <div>
              <h3>My posts</h3>

              <div>
                  <div>
                      <textarea
                        onChange={onchangeTextarea}
                        ref={refTextArea}
                        value={newPostText}
                      />
                  </div>
                  <div>
                      <button onClick={addPost}>add post</button>
                  </div>
              </div>

              <div className={classes.posts}>
                  {posts.map(post => (
                    <Post
                      key={post.id}
                      message={post.message}
                      likesCount={post.likesCount}
                    />
                  ))}
              </div>
          </div>
      </div>
    );
};

export default MyPosts;