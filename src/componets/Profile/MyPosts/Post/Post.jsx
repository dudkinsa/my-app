import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://live.staticflickr.com/3659/3409939766_7b9e009cf8_m.jpg' alt='avatar-dragon'/>
            your post1
            <div>
                <span>  Like</span>
            </div>

        </div>
    );
}
export default Post;