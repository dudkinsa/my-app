import React from 'react';
import classes from '../Dialogs/Dialogs.module.css'
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
    let dialogsArray = [
        {id: 1, name: 'Sergey'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Alexandr'},
        {id: 4, name: 'Valery'},
        {id: 5, name: 'Maksim'},
        {id: 6, name: 'Artem'}
    ]

    let messagesArray = [
        {id: 0, message: 'Hi'},
        {id: 1, message: 'How are you!'},
        {id: 2, message: 'Fine. Thank you! And you?'},
        {id: 3, message: 'Me too'},
        {id: 4, message: 'Me too'},
        {id: 5, message: 'Me too'}
    ]
    //Mассив MAP
    let dialogElement =
            dialogsArray.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messageElement =
            messagesArray.map(oldMessage => <Message message={oldMessage.message}/>)


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogElement}
            </div>
            <div className={classes.messages}>
                {messageElement}
            </div>
        </div>
    );
}

export default Dialogs;