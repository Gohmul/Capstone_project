import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getApi from "../apis/GetApi.js";
import React, { useState } from "react";
import Refresh from "../../components/Refresh";
import Loading from "../../components/Loading";

export default function Games() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [machines, setMachines] = useState(null);

  const getMachinesAndConvertToArray = (item) => {
    if (item) {
      const backToObject = JSON.parse(item);
      const intoAnArray = Object.values(backToObject);
      setMachines(intoAnArray);
    }
  };

  function navigateToMachine(machineId) {
    route.push(`/games/${machineId}`);
  }

  useEffect(() => {
    getApi.getMachines();
    const item = sessionStorage.getItem("machines");
    getMachinesAndConvertToArray(item);
  }, []);
  if (loading) {
    return <Loading />;
  }

  if (machines) {
    return (
      <div className="game-grid">
        {machines.map((machine, index) => (
          <div
            className="game-item"
            onClick={() => navigateToMachine(machine.id)}
          >
            <h2>{machine.model}</h2>
            <img className="game-image" src={machine.mach_img} />
            <h2>${machine.price}</h2>
          </div>
        ))}
      </div>
    );
  } else {
    return window.location.reload();
  }
}
