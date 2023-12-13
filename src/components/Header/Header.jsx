import React from 'react';
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    // debugger
    return (
      <header className={classes.header}>
          <img
            src="https://www.freeiconspng.com/uploads/blank-bird-logo-design-idea-png-15.png"
            alt="logo"
          />
          <div className={classes.loginBlock}>
              {props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
                : <NavLink to={"/login"}>login</NavLink>
              }

          </div>
      </header>
    );
};

export default Header;