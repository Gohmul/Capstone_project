import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getApi from "./apis/GetApi.js";
import React, { useState } from "react";

export default function Games() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [machines, setMachines] = useState(null);

  const getMachinesAndConvertToArray = () => {
    const item = localStorage.getItem("machines");
    const backToObject = JSON.parse(item);
    const intoAnArray = Object.values(backToObject);
    setMachines(intoAnArray);
  };

  useEffect(() => {
    // Perform localStorage action
    getMachinesAndConvertToArray();
  }, []);

  console.log(machines);

  if (machines) {
    return (
      <div className="grid">
        {machines.map((machine, index) => (
          <div className="grid-item" key={index}>
            <h2>{machine.model}</h2>
            <img className="grid-image" src={machine.mach_img} />
            <h2>${machine.price}</h2>
          </div>
        ))}
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}
