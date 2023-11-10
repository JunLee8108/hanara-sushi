import "./Home.css";
import HomeIntro from "./HomeIntro";
import HomeLocation from "./HomeLocation";
import HomePromotion from "./HomePromotion";

export default function Home() {
  return (
    <div className="home-container mg-left-right-auto">
      <HomeIntro />
      <HomeLocation />
      <HomePromotion />
    </div>
  );
}
