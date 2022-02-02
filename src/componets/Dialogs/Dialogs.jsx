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

                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Alexandr</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Valery</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Maksim</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.messages}>Hi</div>
                <div className={classes.messages}>How are you!</div>
                <div className={classes.messages}>Fine. Thank you! And you</div>
                <div className={classes.messages}>Me too</div>
            </div>
        </div>

    );
}
export default Dialogs;