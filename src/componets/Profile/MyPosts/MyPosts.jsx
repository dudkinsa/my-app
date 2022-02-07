import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {


    // Массив MAP
    let postElement =
            props.posts.map(postsArray => <Post message={postsArray.message} quantityLikes={postsArray.quantityLikes}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.postBlock}>
            <div>
                <h3>My post</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick= {addPost} >Send</button>
                <div>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={classes.posts}>
                {postElement}
            </div>
        </div>
    );
}
export default MyPosts;