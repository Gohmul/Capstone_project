import axios from "axios";
import React, { useState, useEffect } from "react";

const Signup = () => {
  let [passwordColor, setPasswordColor] = useState("white");
  let [passwordValue1, setPasswordValue1] = useState("");
  let [passwordValue2, setPasswordValue2] = useState("");
  let [username, setUsername] = useState("");
  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");

  let [users, setUsers] = useState([]);
  let [payLoad, setPayLoad] = useState({
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const [APILOADED, setAPILOADED] = useState(false);

  const changeName = (e) => {
    if (e.target.name === "firstName") {
      setFirstname(e.target.value);
    }
    if (e.target.name === "lastName") {
      setLastname(e.target.value);
    }
    if (e.target.name === "username") {
      setUsername(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

  const checkPass = () => {
    if (passwordValue1 !== passwordValue2) {
      setPasswordColor("red");
    } else {
      setPasswordColor("white");
    }
  };

  const setPassword = (e) => {
    if (e.target.name === "password") {
      setPasswordValue1(e.target.value);
    }
    if (e.target.name === "passwordCheck") {
      setPasswordValue2(e.target.value);
    }
    checkPass();
  };

  const setupPayload = () => {
    let payload = {
      username: username,
      email: email,
      firstName: firstname,
      lastName: lastname,
      password: passwordValue1,
    };
    setPayLoad(payload);
  };

  const loadAPI = () => {
    !APILOADED ? apiCall() : setAPILOADED(true);
  };

  const checkAndSend = async () => {
    //check if the user name is taken
    let sameName = users.find((e) => username === e.username);
    if (sameName) {
      alert("try a different username");
      return;
    }
    //compare the password
    if (passwordValue1 === passwordValue2) {
      let n = await axios.post(
        "http://localhost:8000/ngiojnfijniwrfnmoiwrjfnijognre/",
        payLoad
      );
      console.log(n);
      alert(`Welcome ${firstname}`);
    }
  };

  const apiCall = async () => {
    try {
      let res = await axios(
        "http://localhost:8000/ngiojnfijniwrfnmdfdsfdsoiwrjfnijognre/"
      );
      setUsers(res.data.users);
      // console.log(res.data.users)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    checkPass();
    setupPayload();
    loadAPI();
  }, [passwordValue1, passwordValue2, username, firstname, lastname]);
  return (
    <div className="signUp">
      <input
        type="text"
        id="username"
        name="username"
        placeholder="User Name"
        value={username}
        onChange={(e) => changeName(e)}
      />
      <br />
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => changeName(e)}
      />
      <br />
      <input
        type="text"
        placeholder="First name"
        name="firstName"
        value={firstname}
        onChange={(e) => changeName(e)}
      />
      <br />
      <input
        type="text"
        placeholder="Last name"
        name="lastName"
        value={lastname}
        onChange={(e) => changeName(e)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        name="password"
        style={{ backgroundColor: passwordColor }}
        value={passwordValue1}
        onChange={(e) => setPassword(e)}
      />
      <br />
      <input
        type="password"
        placeholder="Password Confirm"
        name="passwordCheck"
        style={{ backgroundColor: passwordColor }}
        value={passwordValue2}
        onChange={(e) => setPassword(e)}
      />
      <br />
      <br />
      <div></div>
      <button onClick={() => checkAndSend()}>Submit</button>
    </div>
  );
};

export default Signup;
