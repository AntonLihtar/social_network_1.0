import React from 'react';
import classes from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
      <nav className={classes.nav}>
          <div className={classes.item}>
              <NavLink to="/profile" className={({isActive}) => isActive ? classes.active : undefined}>
                  Profile
              </NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/dialogs" className={({isActive}) => isActive ? classes.active : undefined}>
                  Messages
              </NavLink>
          </div>
          <div className={classes.item}>
              <NavLink to="/users" className={({isActive}) => isActive ? classes.active : undefined}>
                  Users
              </NavLink>
          </div>
          <div className={classes.item}>
              <NavLink>News</NavLink>
          </div>
          <div className={classes.item}>
              <NavLink>Music</NavLink>
          </div>
          <div className={classes.item + ' ' + classes.friends}>
              <NavLink>Friends</NavLink>
              {/*<div className={classes.friendsWrapper}>*/}
              {/*    {props.friends.map(fr => (*/}
              {/*      <div*/}
              {/*        key={fr.id}*/}
              {/*        className={classes.friendWrap}*/}
              {/*      >*/}
              {/*          <img src={fr.img} alt="ava"/>*/}
              {/*          <div>{fr.name}</div>*/}
              {/*      </div>*/}
              {/*    ))}*/}
              {/*</div>*/}
          </div>

          <div className={classes.item + ' ' + classes.setting}>
              <NavLink>Setting</NavLink>
          </div>

      </nav>
    );
};

export default Navbar;