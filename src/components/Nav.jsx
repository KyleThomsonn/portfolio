import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import { scrollToTop } from "../utilities/Utilities";

function Nav({ handleShowHideNav }) {
  const closeNav = () => {
    handleShowHideNav();
  };

  return (
    <nav className="nav" onClick={closeNav}>
      <ul>
        <li>
          <NavLink onClick={scrollToTop} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToTop} to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToTop} to="/about">About</NavLink>
        </li>
        <li>
          <NavLink onClick={scrollToTop} to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="nav-social-icons">
        <SocialIcon
          url="https://github.com/KyleThomsonn"
          target="_blank"
          bgColor="#554EEF"
          style={{ width: "4rem", height: "4rem" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/kylethomsonn/"
          target="_blank"
          bgColor="#554EEF"
          style={{ width: "4rem", height: "4rem" }}
        />
        <SocialIcon
          url="mailto:kyle@kylescode.com"
          bgColor="#554EEF"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
    </nav>
  );
}

export default Nav;
