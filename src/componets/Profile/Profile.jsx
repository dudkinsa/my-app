import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";



const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg' alt='lake' />
            </div>
            <div>
                ava + description
            </div>

            <MyPosts messageText = 'I`m first used function "props"!!! '/>



        </div>
    );
}
export default Profile;