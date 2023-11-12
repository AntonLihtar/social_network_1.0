import React from 'react';
import classes from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

const DialogsItem = ({name, id, imgPath}) => {
    const path = `/dialogs/${id}`
    return (
      <div className={classes.dialog + ' ' + classes.active}>
          <img src={imgPath} alt="ava"/>
          <NavLink to={path}>{name}</NavLink>
      </div>
    );
};

export default DialogsItem;