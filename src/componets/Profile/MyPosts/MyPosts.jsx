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
            let text = newPostElement.current.value;
            props.addPost(text);
        }

        return (
            <div className={classes.postBlock}>
                <div>
                    <h3>My post</h3>
                </div>
                <div>
                    <div>
                        <textarea ref={newPostElement}> </textarea>
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
                <div>
                    <MyNewPost messagePeople='Hi!'/>
                    <MyNewPost messagePeople='Hi '/>
                    <MyNewPost messagePeople='How are you?'/>
                    <MyNewPost messagePeople="I'm OK And you?"/>
                    <MyNewPost messagePeople="Me too. What are you doing?"/>
                    <MyNewPost messagePeople="I'm programming the code now"/>
                    <MyNewPost messagePeople="it's very good!"/>

                </div>


            </div>
        );

}

export default MyPosts;