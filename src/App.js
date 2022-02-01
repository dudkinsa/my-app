import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import classes from "./componets/Dialogs/Dialogs.module.css";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className= 'app-wrapper-content'>
                <Dialogs/>
            </div>
            {/*<Profile/>*/}
        </div>

    );
}
export default App;
