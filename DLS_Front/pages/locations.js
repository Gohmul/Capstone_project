import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getApi from "./apis/GetApi.js";
import React, { useState } from "react";
import Refresh from "../components/Refresh";
import Loading from "../components/Loading";

export default function Locations() {
  getApi.getLocations();
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  const [locations, setLocations] = useState(null);

  const getLocationsAndConvertToArray = (item) => {
    if (item) {
      const backToObject = JSON.parse(item);
      const intoAnArray = Object.values(backToObject);
      setLocations(intoAnArray);
    } else window.reload;
  };
  console.log(locations);
  useEffect(() => {
    getApi.getLocations();
    const item = sessionStorage.getItem("locations");
    getLocationsAndConvertToArray(item);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (locations) {
    return (
      <div className="grid">
        {locations.map((location, index) => (
          <div className="grid-item" key={index}>
            <h2>{location.name}</h2>
            <img className="grid-image" src={location.loc_img} />
            <h2>{location.street}</h2>
            <h2>{location.city}</h2>
            <h2>{location.state}</h2>
            <h2>{location.zipcode}</h2>
          </div>
        ))}
      </div>
    );
  } else {
    return window.location.reload();
  }
}
