import Github from "./githublogo.png";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <a target="_blank" className="footer-item githublogo">
          <p className="color1">Repo</p>
          <img className="githublogo" src={Github}></img>
        </a>
        <a
          href="https://github.com/Gohmul"
          target="_blank"
          className="footer-item githublogo"
        >
          <p className="color2">Ryan</p>
          <img className="githublogo" src={Github}></img>
        </a>
        <a target="_blank" className="footer-item githublogo">
          <p className="color3">Placeholder</p>
          <img className="githublogo" src={Github}></img>
        </a>
        <a target="_blank" className="footer-item githublogo">
          <p className="color4">Placeholder</p>
          <img className="githublogo" src={Github}></img>
        </a>
        <a target="_blank" className="footer-item githublogo">
          <p className="color5">Placeholder</p>
          <img className="githublogo" src={Github}></img>
        </a>
      </div>
    </div>
  );
}
