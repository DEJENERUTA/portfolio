import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

//fontawesome icons
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub, AiFillFileText } from "react-icons/ai";

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <div className="app" id={theme}>
      <header className="app-header">
        <div className="app-header-inner-wrapper">
          <Header />
        </div>
      </header>
      <main className="app-main">
        <div className="app-main-inner-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
      <footer className="app-footer">
        <div className="app-footer-inner-wrapper">
          <nav className="app-footer-links">
            <ul>
              <li>
                <a className="gap" href="https://github.com/DEJENERUTA">
                  <AiOutlineGithub />
                  Github
                </a>
              </li>
              <li>
                <a
                  className="gap"
                  href="https://www.linkedin.com/in/dejene-daba-432029140/"
                >
                  <BsLinkedin />
                  Linkedin
                </a>
              </li>
              <li>
                <a className="gap" href="https://twitter.com/DejeneDaba5">
                  <BsTwitter />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="gap"
                  href="/assets/Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillFileText />
                  Resumé
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
