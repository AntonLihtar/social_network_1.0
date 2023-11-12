import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = ({state}) => {
    const refTextArea = React.createRef()

    const readRefValue=()=>{
        alert(refTextArea.current.value)
    }
    return (
      <div className={classes.dialogsWrapper}>
          <div className={classes.dialogs}>
              {state.dialogs.map(item => (
                <DialogsItem
                  key={item.id}
                  name={item.name}
                  id={item.id}
                  imgPath={item.imgPath}
                />)
              )}
          </div>
          <div className={classes.messages}>
              {state.messages.map(mes => (
                <Message
                  key={mes.id}
                  id={mes.id}
                  text={mes.text}
                  author={mes.author}
                />)
              )}
              <div>
                  <div>
                      <textarea ref={refTextArea} cols="30" rows="3"/>
                  </div>
                  <div>
                      <button onClick={readRefValue}>send</button>
                  </div>
              </div>
          </div>
      </div>);
};

export default Dialogs;