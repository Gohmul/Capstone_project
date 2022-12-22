import { Route,Routes } from "react-router";
import axios from "axios";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router";
import DataContext from  './DataContext';
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home"
import Nav from "./Nav"


export default function Main () {
    const [userInfo, setUserInfo] = useState({
        username: "User",
        password: "",
        firstName: "User",
        lastName: "",
        email: "",
        userId: "",
        isLoggedIn: false,
        isAdmin: false,
      })
      


    return(
        <div className="App-main">
            <header className="Nav">
            <DataContext.Provider value={{ userInfo, setUserInfo}}><Nav/></DataContext.Provider>
            </header>
            <DataContext.Provider value={{ userInfo, setUserInfo}}>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/signin" element={<SignIn/> } />
                </Routes>               
</DataContext.Provider>
        </div>
    )
}