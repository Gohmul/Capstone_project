import Welcome from "./Welcome";
import { useNavigate } from "react-router";
import Nav from "./Nav";

export default function Header(props) {
  return (
    <div className="header">
      <Welcome />
      <h1 className="header-text">DLS Games</h1>
      <div className="header-nav"></div>
    </div>
  );
}
