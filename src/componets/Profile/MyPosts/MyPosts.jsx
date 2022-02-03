import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={classes.postBlock}>
            <div>
               <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea>My first text</textarea>
                </div>
                <button>Add post</button>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                <Post message='Hi, how are you?' quantityLikes='250'/>
                <Post message='It`s my first post' quantityLikes='1230'/>


            </div>
        </div>
    );
}
export default MyPosts;