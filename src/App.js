import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header-inner-wrapper"></div>
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
        <div className="app-footer-inner-wrapper"></div>
      </footer>
    </div>
  );
};

export default App;
