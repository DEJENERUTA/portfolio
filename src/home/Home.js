import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="quotes">
        <p>
          “I am a developer because building stuff fulfills my creativity drive
        </p>
        <p>
          I also enjoy being logically challenged and always having room to
          improve.”
        </p>
      </div>
      <div className="home-content">
        <img className="rotate-img" src="./assets/home-img.png" alt="" />
        <div className="home-content-text">
          <h1 className="home-title">
            Hi, I'm <span className="home-title-name"> DEJENE DABA</span>
            <span className="home-title-underline"></span>
          </h1>
          <h2>FRONT-END WEB DEVELOPER</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
