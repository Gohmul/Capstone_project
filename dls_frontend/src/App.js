import { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import Main from "./components/Main";

import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
    </div>
  );
};

export default App;
