import { useRouter } from "next/router";
import { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import getApi from "../apis/GetApi.js";
import Loading from "../../components/Loading";

function LocationDetail() {
  const router = useRouter();
  const [location, setLocation] = useState(null);
  const [user, loading] = useAuthState(auth);

  const getLocationData = async () => {
    const locationId = router.query.locationId;
    const item = await getApi.getLocationDetails(locationId);

    try {
      if (item) {
        const backToObject = item;
        const intoAnArray = Object.values(backToObject);
        setLocation(intoAnArray);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (router.isReady) {
      getLocationData();
    }
  }, []);
  console.log(location);
  if (loading) {
    return <Loading />;
  }

  if (router.isReady) {
    return (
      <div className="grid">
        <h2>Hi</h2>
      </div>
    );
  } else {
    // return window.location.reload();
  }
}
export default LocationDetail;
