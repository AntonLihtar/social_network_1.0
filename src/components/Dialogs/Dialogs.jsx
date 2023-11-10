import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = ({dialogs, messages}) => {



    return (
      <div className={classes.dialogsWrapper}>
          <div className={classes.dialogs}>
              {dialogs.map(item => (
                <DialogsItem
                  key={item.id}
                  name={item.name}
                  id={item.id}
                />)
              )}
          </div>
          <div className={classes.messages}>
              {messages.map(mes => (
                <Message
                  key={mes.id}
                  id={mes.id}
                  text={mes.text}
                />)
              )}
          </div>
      </div>);
};

export default Dialogs;