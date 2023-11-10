import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = ({posts}) => {

    return (
      <div className={classes.content}>
          <div>
              <h3>My posts</h3>

              <div>
                  <div>
                      <textarea name="" id="" cols="30" rows="3"/>
                  </div>
                  <div>
                      <button>add post</button>
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