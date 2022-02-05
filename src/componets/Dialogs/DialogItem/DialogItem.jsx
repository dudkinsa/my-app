import React from 'react';
import classes from '../../Dialogs/Dialogs.module.css'
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

export default DialogItem;