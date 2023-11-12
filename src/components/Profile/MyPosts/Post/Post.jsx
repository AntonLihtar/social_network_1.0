import React from 'react';
import classes from "./Post.module.css"

const Post = (props) => {
    return (
      <div className={classes.post}>
          <div className={classes.postWrapper}>
              <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png" alt="ava"/>
              <div className={classes.message}>{props.message}</div>
          </div>

          <div className={classes.postLike}>like {props.likesCount}</div>
      </div>
    );
};

export default Post;