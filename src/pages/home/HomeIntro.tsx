import "./HomeIntro.css";
import "./Home.css";

const logo = require("../../assets/bg.webp");

export default function HomeIntro() {
  return (
    <div className="home-intro-flex-container home-common-container mg-left-right-auto ">
      <div className="home-intro-flexbox">
        <h1 className="home-intro-title home-title-border-left">
          Hanara Sushi & Grills
        </h1>
        <p className="home-intro-content">
          Welcome to Hanara Sushi, where we serve the freshest ingredients and
          offer an unforgettable dining experience. Indulge in our exquisite
          sushi rolls, expertly crafted by our skilled chefs. Experience the art
          of Japanese cuisine at its finest.
        </p>
        <div>
          <button className="home-intro-order-button">ORDER</button>
        </div>
      </div>
      <div className="home-intro-flexbox">
        <img src={logo} alt="hanara sushi" />
      </div>
    </div>
  );
}