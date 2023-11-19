import React from 'react';
import classes from "./Users.module.css";

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://upload.wikimedia.org/wikipedia/commons/7/77/Dmitry_Yuryevich_Puchkov_Goblin_2013_-_cropped.jpg",
                followed: false,
                name: "Anton",
                status: "I am a boss",
                location: {city: "Vologda", country: "Russia"}
            },
            {
                id: 2,
                photoUrl: "https://i.scdn.co/image/ab67616d0000b2739882429d6116b153846c981f",
                followed: true,
                name: "Victor",
                status: "drawer",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://www.vokrug.tv/pic/person/d/0/a/0/d0a0a90ef551d89c938b5199de39aab1.jpg",
                followed: false,
                name: "Elena",
                status: "sekretar",
                location: {city: "Vologda", country: "Russia"}
            },
        ])
    }

    return (
      <div>
          {
              props.users.map(u => (
                <div
                  key={u.id}>
                    <span>
                        <div className={classes.photoBlock}>
                            <img src={u.photoUrl} alt="ava"/>
                        </div>
                        <div>
                            {u.followed
                              ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                              : <button onClick={() => {props.follow(u.id)}}>follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>
              ))
          }
      </div>
    );
};

export default Users;