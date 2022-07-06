import Project from "./Project";

const projectArray = [
  {
    name: "AIRBNB CLONE",
    description:
      "A clone of Airbnb's website. This is a React app that uses the react-router-dom library to navigate between pages.it is a group project that I participated in with my friend and I created this project in a group of 4.",
    technologies: "Reactjs, TailwindCss and Git and Github",
    githubUrl: "https://github.com/DEJENERUTA/Insta-gruppe4_2022",
    liveDemoUrl: "https://vercel.com/dejeneruta/airbnb",
    image: "/assets/duper.png",
  },
  {
    name: "SMART LIGHT",
    description:
      "A smart light project is a web application that is used to controll rooms light. in this project I used the react-hooks library to create a state management system. I also used the react-router-dom library to navigate between pages.",
    technologies: "React.Js",
    githubUrl: "dejeneruta",
    liveDemoUrl: "https://vercel.com/dejeneruta/smart-light-app",
    image: "/assets/smart-light.png",
  },
  {
    name: "NEWS BOX",
    description:
      "News box  is a web application that is used to display news from an api. I fetched the new york times api and displayed the news in a list. I used the react-hooks library to create a state management system. I also used the react-router-dom library to navigate between pages.",
    technologies: "Html, Css and Javascript",
    githubUrl: "https://github.com/DEJENERUTA/newsbox-DEJENERUTA",
    liveDemoUrl: "https://newsbox-dejeneruta.vercel.app/",
    image: "/assets/newsbox.png",
  },
  {
    name: "ZULA RESTAURANT",
    description:
      "Zula restaurant website is build in reactjs as a front end and we used wordpress as a backend, it is gropu project where I mainly did the front end part, the website is used to order food, book a table and many more.",
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
        <h2 className="project-title">My Works</h2>
        <p className="project-info">
          Here's a list of most of the projects I've been working on lately Some
          of these were built during my coding <br /> camp adventure on
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
