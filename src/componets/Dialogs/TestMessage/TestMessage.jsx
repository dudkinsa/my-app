import React from 'react';
import classes from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import MyPosts from "../../Profile/MyPosts/MyPosts";

const MyTest = (props) => {

    let newMessageElement = React.createRef();

    let addMyMessage =() =>{
let text = newMessageElement.current.value;
alert(text);
    }
    return (
        <div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <button onClick={addMyMessage}>Send</button>
        </div>
    );
}



export default MyTest;