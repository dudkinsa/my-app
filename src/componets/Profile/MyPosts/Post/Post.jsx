import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return (
        <div className={classes.item}>
            <img src='https://live.staticflickr.com/3659/3409939766_7b9e009cf8_m.jpg' alt='avatar-dragon'/>
            {props.message}
            <div>
                <span>  Like {props.quantityLikes}</span>
            </div>
        </div>
    );
}
export default Post;