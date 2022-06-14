import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="site-header">
      <div className="site-logo"></div>
      <div className="site-navigation">
        <nav className="site-menu">
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
        <button className="burger-menu"></button>
      </div>
    </div>
  );
};

export default Header;
