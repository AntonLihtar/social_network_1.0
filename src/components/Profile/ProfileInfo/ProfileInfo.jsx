import React from 'react';
import classes from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
      <div>
          <div>
              <img src="https://www.fonedog.com/images/photo-compress/image-compressor-image.jpg" alt=""/>
          </div>
          <div className={classes.description}>
              ava+ description
          </div>
      </div>
    );
};

export default ProfileInfo;