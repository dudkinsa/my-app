import React from 'react';
import UsersName from "./UsersName/UsersName";




// array
 const MyDialogs = (props) =>{
     let usersData = [
         {id: 1, name: 'Sergey'},
         {id: 2, name: 'Igor'},
         {id: 3, name: 'Sveta'},
         {id: 3, name: 'Natasha'},
 ]

    let usersNameElements = usersData.map( () => {<UsersName/>} );


     let usersMessagesData =[
         {id: 1, message: 'Hi'},
         {id: 2, message: 'How are you?'},
         {id: 3, message: 'Fine'},
         {id: 4, message: 'And you?'}
     ]
     return(
        <div>
            {usersNameElements}

        </div>
    );
 }


 export default MyDialogs