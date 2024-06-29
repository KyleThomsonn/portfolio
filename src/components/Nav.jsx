import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Nav({ handleShowHideNav }) {
  const closeNav = () => {
    handleShowHideNav();
  };

  return (
    <nav className="nav" onClick={closeNav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
      <div className="nav-social-icons">
        <SocialIcon
          url="https://github.com/KyleThomsonn"
          bgColor="#554EEF"
          style={{ width: "4rem", height: "4rem" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/kyle-thomson-a067002a3/"
          bgColor="#554EEF"
          style={{ width: "4rem", height: "4rem" }}
        />
        <SocialIcon
          url="mailto:kylethomsonn@gmail.com"
          bgColor="#554EEF"
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
    </nav>
  );
}

export default Nav;
