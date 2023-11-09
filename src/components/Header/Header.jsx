import React from 'react';
import classes from "./Header.module.css";

const Header = () => {
    return (
      <header className={classes.header}>
          <img
            src="https://w7.pngwing.com/pngs/786/126/png-transparent-logo-contracting-photography-logo-symbol.png"
            alt="logo"/>
      </header>
    );
};

export default Header;