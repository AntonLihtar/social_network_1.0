import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
    const refTextArea = React.createRef()

    const dialogsElements = props.dialogPage.dialogs.map(item => (
      <DialogsItem
        key={item.id}
        name={item.name}
        id={item.id}
        imgPath={item.imgPath}
      />
    ))

    const messagesElements = props.dialogPage.messages.map(mes => (
      <Message
        key={mes.id}
        id={mes.id}
        text={mes.text}
      />
    ))

    const newMessageBody = props.dialogPage.newMessageBody

    const readRefValue = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.onNewMessageChange(body)
    }

    return (
      <div className={classes.dialogsWrapper}>
          <div className={classes.dialogs}>
              {dialogsElements}
          </div>

          <div className={classes.messages}>
              {messagesElements}
              <div>
                  <div>
                      <textarea
                        ref={refTextArea}
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                        placeholder="Enter new message"
                      />
                  </div>
                  <div>
                      <button onClick={readRefValue}>send</button>
                  </div>
              </div>
          </div>
      </div>);
};

export default Dialogs;