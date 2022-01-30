import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./componets/Header";
import NavBar from "./componets/NavBar";
import Profile from "./componets/Profile";


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
