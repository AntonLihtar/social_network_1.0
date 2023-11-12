import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
      <header className={classes.header}>
          <img
            src="https://www.freeiconspng.com/uploads/blank-bird-logo-design-idea-png-15.png"
            alt="logo"/>
      </header>
    );
};

export default Header;