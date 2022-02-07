import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";




/*

let posts = [
    {id: 0, message: 'Hi, how are you?', quantityLikes: 154},
    {id: 1, message: 'It`s my first post', quantityLikes: 254},
]

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

*/


ReactDOM.render(
    <React.StrictMode>

        <App appState ={state}/>

{/*

        <App posts ={posts}
             dialogsData = {dialogsData}
             messagesData ={messagesData}
        />
*/}


{/*<App
     dialogs = {state.dialogsData}
     messagens = {state.messagesData}
     posts = {state.posts}
/>*/}
{/*<App
    posts={state.posts}
    dialogs ={state.dialogsData}
    messenges = {state.messagesData}
/>*/}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
