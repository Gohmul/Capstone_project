import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DataContext from "../components/DataContext";

// const Middleware = require("../middleware/index");

const Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassWord] = useState("");
  let [users, setUsers] = useState([]);
  const [APILOADED, setAPILOADED] = useState(false);
  const data = useContext(DataContext);

  const changeName = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "password") {
      setPassWord(e.target.value);
    }
  };

  console.log(APILOADED);
  const tryLogin = () => {
    const findUser = (User) => users.find((user) => user.username === User);
    let res = findUser(username);
    // console.log(res);
    if (!res) {
      alert(`User ${username} was not found`);
      return;
    }
    console.log(res.password);

    if (res.password === password) {
      data.setUserInfo({
        username: res.username,
        password: res.password,
        firstName: res.firstName,
        lastName: res.lastName,
        email: res.email,
        userId: res.userId,
        isLoggedIn: true,
      });
      // console.log(data.userInfo);
      // let UserI = data.userInfo;
      // localStorage.setItem("UserI", UserI);
    } else {
      alert("Wrong Password");
      data.setUserInfo({
        loggedIn: false,
      });
    }
  };

  const loadAPI = () => {
    !APILOADED ? apiCall() : setAPILOADED(true);
  };

  const apiCall = async () => {
    try {
      let res = await axios(
        "http://localhost:8000/ngiojnfijniwrfnmdfdsfdsoiwrjfnijognre"
      );
      setUsers(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadAPI();
  }, []);

  return (
    <div className="login">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={(e) => changeName(e)}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={password}
        onChange={(e) => changeName(e)}
      />

      <button onClick={() => tryLogin()}>LOGIN</button>
    </div>
  );
};

export default Login;
