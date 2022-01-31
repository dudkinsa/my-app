import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <Profile/>
        </div>

    );
}
export default App;
