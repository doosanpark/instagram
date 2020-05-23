import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Login from './login/component/Login';
import Main from './main/component/Main';
import Profile from "./profile/component/Profile";
import Upload from "./upload/component/Upload";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/main" component={Main}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/upload" component={Upload}/>
                <Route exact path="/" component={Login}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
