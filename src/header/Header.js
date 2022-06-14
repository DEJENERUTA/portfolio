import { Link } from "react-router-dom";
import { useState } from "react";
import classnames from "classnames";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="site-header">
      <div className="site-logo"></div>
      <div className="site-navigation">
        <nav className={classnames("site-menu", { open: isMenuOpen })}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="burger-menu"
        >
          menu
        </button>
      </div>
    </div>
  );
};

export default Header;
