import React from "react";
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import Header from "./components/Header/Header";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

function App() {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <ProfileContainer/>}/>
                <Route path='/messages' render={() => <MessagesContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
            </div>
        </div>
    );
}

export default App;
