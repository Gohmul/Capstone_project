import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import getApi from "../apis/GetApi.js";
import React, { useState } from "react";
import Loading from "../../components/Loading";
import Link from "next/link";

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
    } else {
      window.location.reload();
    }
  };

  useEffect(() => {
    getApi.getLocations();
    const item = sessionStorage.getItem("locations");
    getLocationsAndConvertToArray(item);
    getApi.getMachines();
  }, []);

  if (loading) {
    return <Loading />;
  }
  console.log(locations);
  if (locations) {
    return (
      <div className="container">
        <div className="locations">
          {locations.map((location, index) => (
            <div className="location-grid-item" key={index}>
              <h2>{location.name}</h2>
              <Link href={location.website}>
                <a rel="noopener noreferrer" target="_blank">
                  <img className="location-grid-image" src={location.loc_img} />
                </a>
              </Link>
              <h2>
                {location.street} , {location.city} , {location.state} ,
                {location.zipcode}
              </h2>

              <div className="machine-grid">
                {location.machines.map((machine, index) => (
                  <div className="machine-item" key={index}>
                    <h3>{machine.model} </h3>
                    <img className="machine-image" src={machine.mach_img} />
                    <h3>{machine.price}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return window.location.reload();
  }
}
