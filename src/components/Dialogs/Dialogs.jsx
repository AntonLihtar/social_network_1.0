import React from 'react';
import classes from "./Dialogs.module.css"
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50)

const DialogsForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
          <div>
              <Field name="newMessageBody"
                     component={FormControl}
                     child="input"
                     validate={[requiredField, maxLength50]}
                     placeholder="Enter new message"
              />
          </div>
          <div>
              <button>send</button>
          </div>
      </form>
    )
}

const DialogsReduxForm = reduxForm({
    // a unique name for the form
    form: 'dialogs'
})(DialogsForm)


const Dialogs = (props) => {

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


    const submitForm = (formData) => {
        console.log(formData.newMessageBody)
        props.sendMessage(formData.newMessageBody)
    }

    return (
      <div className={classes.dialogsWrapper}>
          <div className={classes.dialogs}>
              {dialogsElements}
          </div>

          <div className={classes.messages}>
              {messagesElements}
              <DialogsReduxForm onSubmit={submitForm} props={props}/>
          </div>
      </div>);
};

export default Dialogs;