import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
      <div className={classes.content}>
          <div>
              <img src="https://www.fonedog.com/images/photo-compress/image-compressor-image.jpg" alt=""/>
          </div>
          <div>
              ava+ description
          </div>
          <MyPosts/>
      </div>
    );
};

export default Profile;