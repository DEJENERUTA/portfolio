import Project from "./projects/Project";

const projectArray = [
  {
    name: "AIRBNB CLONE",
    description:
      "A clone of Airbnb's website. This is a React app that uses the react-router-dom library to navigate between pages.",
    technologies: "Html, Css and Javascript",
    githubUrl: "https://github.com/DEJENERUTA/Insta-gruppe4_2022",
    liveDemoUrl: "https://vercel.com/dejeneruta/airbnb",
    image: "/assets/duper.png",
  },
  {
    name: "SMART LIGHT",
    description:
      "A smart light that can be controlled by a smartphone. This is a React app that uses the react.js to build a mobile app.",
    technologies: "React.Js",
    githubUrl: "dejeneruta",
    liveDemoUrl: "https://vercel.com/dejeneruta/smart-light-app",
    image: "/assets/smart-light.png",
  },
  {
    name: "NEWS BOX",
    description:
      "is a web application that allows users to create a  play list of songs and share it with other users.",
    technologies: "Html, Css and Javascript",
    githubUrl: "https://github.com/DEJENERUTA/newsbox-DEJENERUTA",
    liveDemoUrl: "https://newsbox-dejeneruta.vercel.app/",
    image: "/assets/newsbox.png",
  },
  {
    name: "ZULA RESTAURANT",
    description:
      "is a web application that allows users to create a  play list of songs and share it with other users.",
    technologies: "React.js, Wordpress, tailwindcss",
    githubUrl: "https://github.com/orindholt/zula-restaurant",
    liveDemoUrl: "https://zula-restaurant.vercel.app/",
    image: "/assets/zula-pic.png",
  },
];
const Projects = () => {
  return (
    <li className="project-item-list">
      <div className="project-container">
        <h2 className="project-title">My Works blbl</h2>
        <p className="project-description">
          Here's a list of most of the projects I've been working on lately.
          Some of these were built during my coding camp adventure on
          freeCodeCamp, some were fun projects I wanted to play with to get a
          better understanding
        </p>
        <div className="flex-container">
          <ul className="project-list">
            {projectArray.map((project) => (
              <Project
                name={project.name}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveDemoUrl={project.liveDemoUrl}
                image={project.image}
              />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Projects;
