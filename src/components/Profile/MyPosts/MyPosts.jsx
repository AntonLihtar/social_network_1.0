import React from 'react';
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
      <div className={classes.content}>
          <div>My posts
              <div>
                  <textarea name="" id="" cols="30" rows="3"></textarea>
                  <button>add post</button>
                  <button>remove</button>
              </div>

              <div className={classes.posts}>
                  <Post  message="Hello , this is 1 message" likesCount="10"/>
                  <Post message="Post #2 good" likesCount="3"/>
                  <Post message="Post #3 " likesCount="64"/>
                  <Post message="Post 4 goodbye" likesCount="30"/>
              </div>
          </div>
      </div>
    );
};

export default MyPosts;