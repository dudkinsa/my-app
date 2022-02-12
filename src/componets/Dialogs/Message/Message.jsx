import React from 'react';
import classes from '../../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import MyPosts from "../../Profile/MyPosts/MyPosts";
import MyTest from "../TestMessage/TestMessage";

const Message = (props) => {
    return (
       <div>
           <div className={classes.dialog}>
               {props.message}
           </div>

       </div>
    );
}
export default Message;