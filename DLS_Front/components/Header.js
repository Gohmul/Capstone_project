import Welcome from "./Welcome";
import Link from "next/link";
import Nav from "./Nav";

export default function Header() {
  return (
    <div className="header">
      <Welcome />
      <div className="header-text-container">
        <Link href="/">
          <h2 className="header-text">
            <span data-index="1">D</span>
            <span data-index="2">L</span>
            <span data-index="3">S</span>
            <span data-index="4">G</span>
            <span data-index="5">A</span>
            <span data-index="6">M</span>
            <span data-index="7">E</span>
            <span data-index="8">S</span>
          </h2>
        </Link>
      </div>
      <div className="header-nav"></div>
    </div>
  );
}
