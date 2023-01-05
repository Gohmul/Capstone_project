import logo from "../assets/githublogo.png";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <a
          target="_blank"
          className="footer-item"
          href="https://github.com/Gohmul/Capstone_project"
        >
          <p className="color1">Repo</p>
          <div>
            {/* // style={{
            //   backgroundImage: `url(${Github})`,
            //   backgroundSize: `cover`,
            // }} */}
            <Image className="githublogo" src={logo} width={40} height={40} />
          </div>
        </a>
        <a
          href="https://github.com/Gohmul"
          target="_blank"
          className="footer-item"
        >
          <p className="color2">Ryan</p>
          <Image className="githublogo" src={logo} width={40} height={40} />
        </a>
      </div>
    </div>
  );
}
