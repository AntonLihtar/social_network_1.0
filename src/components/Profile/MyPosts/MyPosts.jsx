import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";


const MyPosts = (props) => {
    const refTextArea = React.createRef()

    const onPostChange = () => {
        const text = refTextArea.current.value
        props.updateNewPostText(text)
    }

    const onAddPost = () => {
        props.addPost()
    }

    return (
      <div className={classes.content}>
          <div>
              <h3>My posts</h3>

              <div>
                  <div>
                      <textarea
                        onChange={onPostChange}
                        ref={refTextArea}
                        value={props.newPostText}
                      />
                  </div>
                  <div>
                      <button onClick={onAddPost}>add post</button>
                  </div>
              </div>

              <div className={classes.posts}>
                  {props.posts.map(post => (
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