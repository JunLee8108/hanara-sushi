import "./Home.css";
import HomeIntro from "./HomeIntro";
import HomeLocation from "./HomeLocation";
import HomePromotion from "./HomePromotion";
import HomeContact from "./HomeContact";
import HomeCarouselDesktop from "./HomeCarouselDesktop";
import HomeCarousel from "./HomeCarousel";

export default function Home() {
  return (
    <>
      <div className="home-bg-container">
        <div className="home-intro-bg-container mg-left-right-auto">
          <HomeIntro />
        </div>
      </div>

      <div className="home-others-container mg-left-right-auto">
        <HomeLocation />
        <HomeContact />
        <div className="home-others-desktop">
          <HomeCarouselDesktop />
        </div>
        <div className="home-others-mobile">
          <HomeCarousel />
        </div>
        <HomePromotion />
      </div>
    </>
  );
}
