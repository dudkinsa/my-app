import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import MyNewPost from "./MyNewPost/MyNewPost";


const MyPosts = (props) => {

    // Массив MAP
        let postElement =
                props.posts.map(postsArray => <Post message={postsArray.message} quantityLikes={postsArray.quantityLikes}/>);


        let newPostElement = React.createRef();

        let addPost = () => {
            //можно удалить. нет смысла отправлять в state
            /*let text = newPostElement.current.value;*/

            props.addPost();

        }

        let onPostChange = () =>{
            let text = newPostElement.current.value;
            props.updateNewPostText(text);
        }

        return (
            <div className={classes.postBlock}>
                <div>
                    <h3>My post</h3>
                </div>
                <div>

                    <div>
                        <textarea  onChange={onPostChange} ref={newPostElement} value= {props.newPostText}> </textarea>
                    </div>

                    <button onClick={addPost}>Send</button>

                    <div>
                    </div>
                </div>
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    {postElement}
                </div>


                <div className={classes.posts}>
                    My new posts
                </div>



            </div>
        );

}

export default MyPosts;