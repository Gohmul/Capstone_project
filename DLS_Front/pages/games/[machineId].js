import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import getApi from "../apis/GetApi.js";
import Loading from "../../components/Loading";

function MachineDetail() {
  const router = useRouter();
  const [machine, setMachine] = useState(null);
  const machineId = router.query.machineId;
  const [user, loading] = useAuthState(auth);

  getApi.getMachineDetails(machineId);

  // use the machineId to fetch data for the specific machine and render the page
  console.log(machineId);
  useEffect(() => {
    const items = sessionStorage.getItem("machine");
    setMachine(items);
  }, []);
  console.log(machine);

  if (loading) {
    return <Loading />;
  }

  if (machine) {
    return (
      <div className="grid">
        <h2>Xd</h2>
      </div>
    );
  } else {
  }
  return window.location.reload();
}
export default MachineDetail;
