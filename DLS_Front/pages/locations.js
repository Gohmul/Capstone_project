import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import getApi from "./apis/GetApi.js";
import React, { useState } from "react";
export default function Locations() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);

  if (loading) return <h1>Loading</h1>;
  else
    return (
      <div>
        <h1>Welcome to the locations screen.{localStorage.locations}</h1>
      </div>
    );
}
