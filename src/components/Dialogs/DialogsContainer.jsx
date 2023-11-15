import React from 'react';
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogPages

    const readRefValue = () => {
        props.store.dispatch(sendMessageCreator())
    }

    const onNewMessageChange = (body) => {
        const action = updateNewMessageBodyCreator(body)
        props.store.dispatch(action)
    }

    return (
      <Dialogs
        dialogsPages={state}
        readRefValue={readRefValue}
        onNewMessageChange={onNewMessageChange}
      />
    )
};

export default DialogsContainer;