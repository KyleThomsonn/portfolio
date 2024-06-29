import Nav from "./Nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import { appTitle } from "../global/global";
import { scrollToTop } from "../utilities/Utilities"

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className={showNav ? "show" : ""}>
      <Link onClick={scrollToTop} to="/">
        <h1>{appTitle}</h1>
      </Link>
      <button
        className={!showNav ? "btn-nav" : "show-btn-nav"}
        onClick={toggleNav}
      >
        {!showNav ? "Menu" : "Close"}
      </button>
      <Nav handleShowHideNav={toggleNav} />
    </header>
  );
}

export default Header;
