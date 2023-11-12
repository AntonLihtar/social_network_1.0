import React from 'react';
import classes from "./Message.module.css";

const Message = ({id, author, text}) => {
    return (
      <div className={classes.message}>
          <div className={classes.avatar}>
              <img src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png" alt="ava"/>
              <span>{author}</span>
          </div>
          <div className={classes.text}>
              {text}
          </div>

      </div>
    );
};

export default Message;