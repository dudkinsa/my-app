import React from 'react';
import classes from '../UsersDialogls/UsersDialogs.module.css'

const UsersDialogs = (props) => {
    return (
        <div>
            <div className={classes.content}>
                {props.name} {props.id}
            </div>
            <div>
                {props.message}
            </div>


        </div>


    );
}


export default UsersDialogs;