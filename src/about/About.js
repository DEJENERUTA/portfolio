import "./About.css";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
const About = () => {
  return (
    <div className="about-main-content">
      <div className="about-content">
        <div>
          <svg
            className="about-pic-svg"
            width="270"
            height="250"
            viewBox="0 0 350 370"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              id="Rectangle 25"
              x="3"
              y="3"
              width="344"
              height="364"
              fill="#ffffff"
              stroke="#FFFF00"
              stroke-width="6"
            />
          </svg>
          <img
            className="about-pic"
            src="./assets/about-pic.jpg"
            alt=""
            srcset=""
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <h3>Hello, I’M Dejene Daba</h3>
          <p>
            Hello! My name is Dejene and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I decided to change my career taught me a lot about HTML & CSS!
            Hello! My name is Dejene and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I decided to change my career taught me a lot about HTML & CSS!
          </p>
          <p>
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five
          </p>
          <p>
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five
          </p>
        </div>
      </div>
      <div className="about-skills">
        <h3 className="skills">My Skills</h3>
        <div className="skills-content">
          <AiFillHtml5 />
          <DiCss3 />
          <DiJavascript />
          <DiReact />
          <SiTailwindcss />
        </div>
      </div>
    </div>
  );
};

export default About;
