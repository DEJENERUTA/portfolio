import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-wrapper">
      <div className="about-content">
        <div className="about-pic-wrapper">
          <div className="about-pic-border"></div>
          <img
            className="about-pic"
            src="./assets/about-pic.jpg"
            alt=""
            srcset=""
          />
          <div className="about-pic-overlay"></div>
        </div>
        <div className="about-text">
          <h2 className="about">About Dejene</h2>
          <h3 className="D">
            Hello, <span>I’M Dejene Daba</span>
          </h3>
          <p className="about-desc">
            "Motivated recent web development graduate with experience building
            unbreakable and elegant website looking for an opportunity to grow
            front-end development skills in an innovative environment."
          </p>
          <p className="about-desc">
            Hello! My name is Dejene Daba, and I enjoy creating things that live
            on the internet. My interest in web development started in 2019 when
            I decided to change my career taught me a lot about HTML & CSS! I'm
            currently studying as a Front-end web developer, and I'm always
            interested in a challenge. Reach out to me if you have any
            questions, my email is dejenedaba269@gmail.com to connect
          </p>
        </div>
      </div>
      <div className="about-skills">
        <h4 className="skills">My Skills</h4>
        <div className="skills-content">
          <AiFillHtml5 />
          <DiCss3 />
          <DiJavascript />
          <DiReact />
          <SiTailwindcss />
          <BsGithub />
        </div>
      </div>
    </div>
  );
};

export default About;
