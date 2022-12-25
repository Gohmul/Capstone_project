import Welcome from "./Welcome";
import { useNavigate } from "react-router";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
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
