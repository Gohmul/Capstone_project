import Welcome from "./Welcome";
import { useNavigate } from "react-router";
import Link from "next/link";
import Nav from "./Nav";
import getApi from "../pages/apis/GetApi";

export default function Header() {
  getApi.getLocations();
  return (
    <div className="header">
      <Welcome />
      <div className="header-text">
        <Link href="/">DLS Games</Link>
      </div>
      <div className="header-nav"></div>
    </div>
  );
}
