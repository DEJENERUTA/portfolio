import "./Project.css";

const Project = ({
  name,
  description,
  technologies,
  githubUrl,
  liveDemoUrl,
  image,
}) => {
  return (
    <li className="project-item">
      <div className="project-item-container">
        <div className="project-image">
          <img src={image} alt="airbnb" />
        </div>
        <div className="content">
          <div className="project-name">
            <h3>{name}</h3>
          </div>
          <div className="project-description">
            <p>Description: {description}</p>
          </div>
          <div>
            <div className="project-technologies">
              <p>Technologies: {technologies}</p>
            </div>
            <div className="project-links">
              <a className="source-underline" href={githubUrl}>
                View Source Code
              </a>
              <a className="demo-underline" href={liveDemoUrl}>
                View Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
