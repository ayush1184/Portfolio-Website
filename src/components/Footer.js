import { LiaGithub } from "react-icons/lia";
import { navbarTabs, handleNavLinkClick } from "./App";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-nav-links">
        {navbarTabs.map((el, i) => (
          <div className={`nav-link`} key={el} onClick={handleNavLinkClick}>
            {el}
          </div>
        ))}
      </div>

      <p>
        Copyright &copy;{" "}
        <a href="https://github.com/ayush1184" target="blank">
          <span>
            <LiaGithub />
          </span>
          ayush1184
        </a>
      </p>
    </footer>
  );
}
