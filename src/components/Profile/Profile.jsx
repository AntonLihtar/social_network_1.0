import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePages, dispatch}) => {
    return (
      <div className={classes.content}>
          <ProfileInfo/>
          <MyPosts
            posts={profilePages.posts}
            newPostText={profilePages.newPostText}
            dispatch={dispatch}
          />
      </div>
    );
};

export default Profile;