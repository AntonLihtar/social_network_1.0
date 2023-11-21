import React from 'react';
import classes from "./Users.module.css";
import userAva from "../../assets/img/ava.png";

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    if (pageCount > 20) {
        pageCount = 20
    }

    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
      <div>
          {pages.map(p => (
            <span
              key={p}
              className={p === props.currentPage && classes.activeSelectedPage}
              onClick={() => {
                  props.onPageChanged(p)
              }}
            >{p}</span>)
          )}

          {props.users.map(u => (
            <div
              key={u.id}>
                    <span>
                        <div className={classes.photoBlock}>
                            <img src={
                              u.photos.small ||
                              userAva
                            } alt="ava"/>
                        </div>
                        <div>
                            {u.followed
                              ? <button onClick={() => {
                                  props.unfollow(u.id)
                              }}>unfollow</button>
                              : <button onClick={() => {
                                  props.follow(u.id)
                              }}>follow</button>
                            }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    {/*<span>*/}
                    {/*    <div>{u.location.city}</div>*/}
                    {/*    <div>{u.location.country}</div>*/}
                    {/*</span>*/}
                    </span>
            </div>
          ))}
      </div>
    );
};

export default Users;