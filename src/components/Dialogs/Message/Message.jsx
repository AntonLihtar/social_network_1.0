import React from 'react';
import classes from "./Message.module.css";

const Message = ({id, text}) => {
    return (
      <div className={classes.message}>
          {`${id}. ${text}`}
      </div>
    );
};

export default Message;