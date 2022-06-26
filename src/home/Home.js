import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="quotes">
        <p>“I believe that the main reason is that</p>
        <p>front-end development satisfies my need for creativity.”</p>
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
