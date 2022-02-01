import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                My post
            </div>
            <div>
                <textarea>{props.messageText}</textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' quantityLikes = '1500'/>
                <Post message = 'It`s my first post' quantityLikes = '1500'/>


            </div>
        </div>
    );
}
export default MyPosts;