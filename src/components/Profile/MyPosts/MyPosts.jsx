import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = ({posts, addPost, newPostText, setPostText}) => {

    const refTextArea = React.createRef()

    const onchangeTextarea = () => {
        setPostText(refTextArea.current.value)
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