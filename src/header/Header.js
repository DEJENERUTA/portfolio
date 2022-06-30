import { Link } from "react-router-dom";
import { useState } from "react";
import classnames from "classnames";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="site-header">
      <div className="site-logo">
        <Link to="/">
          <svg
            width="60"
            height="60"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M97.6406 79.0781C97.6406 90.3906 95.3281 99.0469 90.7031 105.047C86.1094 111.016 79.4844 114 70.8281 114H54.0469V45.4688H72.375C80.3438 45.4688 86.5469 48.4219 90.9844 54.3281C95.4219 60.2031 97.6406 68.4531 97.6406 79.0781ZM84.5625 79.4531C84.5625 64.1406 80.3438 56.4844 71.9062 56.4844H66.7969V102.844H70.9219C75.5781 102.844 79.0156 100.906 81.2344 97.0312C83.4531 93.125 84.5625 87.2656 84.5625 79.4531Z"
              fill="white"
            />

            <path
              d="M13.0481 39.2321L75 3.4641L136.952 39.2321V110.768L75 146.536L13.0481 110.768V39.2321Z"
              stroke="#FFFF00"
              stroke-width="6"
              className="hexagon"
            />
          </svg>
        </Link>
      </div>
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
          <svg
            width="41"
            height="33"
            viewBox="0 0 41 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 3">
              <line
                id="Line 19"
                y1="17"
                x2="41"
                y2="17"
                stroke="#FFFF00"
                stroke-width="4"
              />
              <line
                id="Line 19_2"
                y1="31"
                x2="41"
                y2="31"
                stroke="#FFFF00"
                stroke-width="4"
              />
              <line
                id="Line 19_3"
                y1="2"
                x2="41"
                y2="2"
                stroke="#FFFF00"
                stroke-width="4"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
