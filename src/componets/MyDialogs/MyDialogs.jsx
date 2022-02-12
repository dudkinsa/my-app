import React from 'react';
import classes from '../MyDialogs/MyDialogs.module.css';
import UsersDialogs from "./UsersDialogls/UsersDialogs";


 const MyDialogs = (props) =>{

     return(
        <div>
            <div className={classes.users}>
                <UsersDialogs name ='Dima' id ='1'/>
                <UsersDialogs name ='Sergey' id ='2'/>
                <UsersDialogs name ='Yra' id ='3'/>
            </div>
            <div className={classes.messages}>
                <UsersDialogs message ='Hi'/>
            </div>
        </div>
    );
 }


 export  default MyDialogs;