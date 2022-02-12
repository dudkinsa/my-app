import React from 'react';
import './App.css';
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import Dialogs from "./componets/Dialogs/Dialogs";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import MyDialogs from "./componets/MyDialogs/MyDialogs";
import ProfileInfo from "./componets/Profile/ProfileInfo/ProfileInfo";
import state from "./redux/state";
import {addPost} from "./redux/state";

const App = (props) => {

    return (
        <BrowserRouter>
            <div>
                <div className='app-wrapper'>
                    <Header/>
                    <NavBar/>

                    <div className='app-wrapper-content'>

                        <Routes>
                            <Route path="/my_dialogs/" element={<MyDialogs/>}/>


                            <Route path="/dialogs/*"
                                   element={<Dialogs
                                       dialogsData={props.finalState.messagesPage.dialogsData}
                                       messagesData={props.finalState.messagesPage.messagesData}/>}/>

                            <Route path="/profile/"
                                   element={<Profile
                                       posts={props.finalState.profilePage.posts}
                                       addPost={props.addPost}/>}/>

                            <Route path="/music/" element={<Music/>}/>
                            <Route path="/settings/" element={<Settings/>}/>

                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
