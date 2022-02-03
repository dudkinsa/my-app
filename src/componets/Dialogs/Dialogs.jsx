import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Sergey" id='1'/>
                <DialogItem name="Dima" id='2'/>
                <DialogItem name="Alexandr" id='3'/>
                <DialogItem name="Valery" id='4'/>
                <DialogItem name="Maksim" id='5'/>
                <DialogItem name="Artem" id='6'/>
            </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How are you!'/>
                <Message message='Fine. Thank you! And you?'/>
                <Message message='Me too'/>
            </div>
        </div>
    );
}

export default Dialogs;