import React from 'react';
import classes from './ProfileInfo.module.css';
import MyPosts from "../../Profile/MyPosts/MyPosts";


const ProfileInfo = () => {
    return (
        <div>

            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
                    alt='lake'/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}
export default ProfileInfo;