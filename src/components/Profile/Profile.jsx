import React from 'react';
import classes from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {setProfileStatus} from "../../redux/profileReducer";

const Profile = (props) => {

    return (
      <div className={classes.content}>
          <ProfileInfo
            profile={props.profile}
            profileStatus={props.profileStatus}
            setProfileStatus={props.setProfileStatus}
          />
          <MyPostsContainer/>
      </div>
    );
};

export default Profile;