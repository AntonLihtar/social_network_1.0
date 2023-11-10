import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({posts}) => {
    return (
      <div className={classes.content}>
          <ProfileInfo/>
          <MyPosts posts={posts}/>
      </div>
    );
};

export default Profile;