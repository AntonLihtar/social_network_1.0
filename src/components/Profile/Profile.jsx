import React from 'react';
import classes from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profilePages, addPost, setPostText}) => {
    return (
      <div className={classes.content}>
          <ProfileInfo/>
          <MyPosts
            posts={profilePages.posts}
            newPostText={profilePages.newPostText}
            addPost={addPost}
            setPostText={setPostText}
          />
      </div>
    );
};

export default Profile;