import Project from "./Project";

const projectArray = [
  {
    name: "THE GREEK ISLANDS",
    description:
      "A website that provides information about the Greek islands. through the website the user can see some images of the Islands and can read about it. I learnt how to make read more and read less through the project and I also learnt how to change the images by clicking right and left arrows.",
    technologies: "Html, Css, Javascript Git and Github",
    githubUrl: "https://github.com/DEJENERUTA/next-greekilands-project",
    liveDemoUrl: " https://dejeneruta.github.io/next-greekilands-project/",
    image: "/assets/greek-island-project.png",
  },
  {
    name: "TRAINER APP",
    description:
      "A trainer app is a web application project  that used for fitness center. the app will help the user to see trainers, available classes, and a form to login and sign up for classes.  in this project I used the react-hooks library to create a state management system. I also used the react-router-dom library to navigate between pages. in this project I learnt fetching data from an API and, learn a lot about props and state.",
    technologies: "React.Js",
    githubUrl: "https://github.com/DEJENERUTA/terminsprove",
    liveDemoUrl: "https://terminsprove.vercel.app/",
    image: "/assets/pre-exam-project.png",
  },
  {
    name: "NEWS BOX",
    description:
      "News box  is a web application that is used to display news from an api. I fetched the new york times api and displayed the news in a list. I learn how to make dark mode and light mode in this project. in this project I learn how to save data in archive, I also learn how to save data in localstorage. the user can save the news in archive and can delete the news from archive. ",
    technologies: "Html, Css and Javascript, gulp, sass, git and github",
    githubUrl: "https://github.com/DEJENERUTA/newsbox-DEJENERUTA",
    liveDemoUrl: "https://newsbox-dejeneruta.vercel.app/",
    image: "/assets/news-box-project.png",
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
