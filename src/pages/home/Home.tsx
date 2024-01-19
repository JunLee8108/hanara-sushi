import "./Home.css";
import HomeIntro from "./HomeIntro";
import HomeLocation from "./HomeLocation";
import HomePromotion from "./HomePromotion";
import HomeContact from "./HomeContact";
import MenuSpecialty from "../menu/MenuSpecialty";
import HomeCarousel from "./HomeCarousel";

export default function Home() {
  return (
    <div className="home-bg">
      <div className="home-bg-container">
        <div className="home-intro-bg-container mg-left-right-auto">
          <HomeIntro />
        </div>
      </div>

      <div className="home-location-container mg-left-right-auto">
        <HomeLocation />
        <HomeContact />
        <HomeCarousel />
        <HomePromotion />
      </div>
    </div>
  );
}
