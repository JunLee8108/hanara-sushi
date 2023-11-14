import "./Home.css";
import HomeIntro from "./HomeIntro";
import HomeLocation from "./HomeLocation";
import HomePromotion from "./HomePromotion";
import HomeContact from "./HomeContact";

export default function Home() {
  return (
    <div className="home-container mg-left-right-auto">
      <HomeIntro />
      <HomeLocation />
      <HomePromotion />
      <HomeContact />
    </div>
  );
}
