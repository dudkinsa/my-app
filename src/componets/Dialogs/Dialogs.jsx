import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import MyPosts from "../Profile/MyPosts/MyPosts";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MyTest from "./TestMessage/TestMessage";

const Dialogs = (props) => {

    // massive MAP образец
    /*let newArray =
                 oldArray
                     .map(el => (<Message name ={el.name}/>))*/
    //Примечание: в стрелочной функции если имеется один параметр, то скобки не ставяься. у нас один параметр dialog и скобки не ставим.  Образец стрелочной функции:  name () => {};



    let dialogElement = props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElement = props.messagesData.map(messageArray => <Message message={messageArray.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogElement}
{/*
                <DialogItem name={dialogsData[0].name} id ={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id ={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id ={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id ={dialogsData[2].id}/>
                <DialogItem name={dialogsData[4].name} id ={dialogsData[2].id}/>
                <DialogItem name={dialogsData[5].name} id ={dialogsData[2].id}/>
div*/}
            </div>
            <div className={classes.messages}>

                {messageElement}
                {/*<Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>*/}
               <div>
                   <h3>My test message</h3>
               </div>
                <MyTest/>
            </div>
        </div>
    );
}

export default Dialogs;