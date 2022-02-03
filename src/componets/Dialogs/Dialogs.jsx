import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import MyPosts from "../Profile/MyPosts/MyPosts";

const DialogItem = (props) => {
    // изначальный вариант
    /*
    return(
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
         */
    //можно другой вариант сделать
    let path = /dialogs/ + props.id;
    return (

        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}
const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Alexandr'},
        {id: 4, name: 'Valery'},
        {id: 5, name: 'Maksim'},
        {id: 6, name: 'Artem'}
    ]
    let messagesData = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How are you!'},
        {id: 2, message: 'Fine. Thank you! And you?'},
        {id: 3, message: 'Me too'},
        {id: 4, message: 'Me too'},
        {id: 5, message: 'Me too'}
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[2].id}/>

            </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
                <Message message={messagesData[3].message}/>
                <Message message={messagesData[4].message}/>
                <Message message={messagesData[5].message}/>
            </div>
        </div>
    );
}

export default Dialogs;