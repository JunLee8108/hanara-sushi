import "./Home.css";
import "./HomeCarouselDesktop.css";

const bakedRoll = require("../../assets/Baked-Salmon-Roll.webp");
const HallelujahRoll = require("../../assets/Hallelujah-Roll.webp");
const RainbowRoll = require("../../assets/Rainbow-Roll.webp");

export default function HomeCarouselDesktop() {
  return (
    <div className="home-carousel-desktop-container home-common-container mg-left-right-auto ">
      <h1 className="home-title-border-left">Our Specialty</h1>

      <div className="home-carousel-grid-container">
        <div className="home-carousel-gridbox">
          <div className="home-carousel-gridbox-imgbox">
            <img src={bakedRoll} alt="" />
          </div>
          <h2 className="home-carousel-gridbox-title">Baked Roll</h2>
          <p className="home-carousel-gridbox-content">
            Baked with California roll on spicy tuna on top with jalapeno
          </p>
        </div>
        <div className="home-carousel-gridbox">
          <div className="home-carousel-gridbox-imgbox">
            <img src={HallelujahRoll} alt="" />
          </div>
          <h2 className="home-carousel-gridbox-title">Hallelujah Roll</h2>
          <p className="home-carousel-gridbox-content">
            Spicy tuna, avocado, cucumber, burdock root with Salmon on top
          </p>
        </div>
        <div className="home-carousel-gridbox">
          <div className="home-carousel-gridbox-imgbox">
            <img src={RainbowRoll} alt="" />
          </div>
          <h2 className="home-carousel-gridbox-title">Rainbow Roll</h2>
          <p className="home-carousel-gridbox-content">
            California roll with 5 pieces of fish on top
          </p>
        </div>
      </div>
    </div>
  );
}
