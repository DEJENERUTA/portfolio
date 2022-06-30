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
  return (
    <div className="app">
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
          <div className="app-footer-links">
            <a className="gap" href="#">
              <AiOutlineGithub />
              Github
            </a>
            <a className="gap" href="#">
              <BsLinkedin />
              Linkedin
            </a>
            <a className="gap" href="#">
              <BsTwitter />
              Twitter
            </a>
            <a className="gap" href="#">
              <AiFillFileText />
              Resumé
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
