import React from 'react';
import classes from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
      <div>
          <div>
              <img src="https://www.fonedog.com/images/photo-compress/image-compressor-image.jpg" alt=""/>
          </div>
          <div className={classes.description}>
              <div>
                  <img src={props.profile.photos.large} alt=""/>
              </div>
              <div>
                  {props.profile.aboutMe}
              </div>
              <div>
                  <strong>контакты:</strong>
                  <br/>
                  {Object.keys(props.profile.contacts).map(e => (
                    <div key={e}>
                        {e}: <strong>{props.profile.contacts[e]}</strong>
                    </div>
                  ))}
              </div>
          </div>
      </div>
    );
};

export default ProfileInfo;