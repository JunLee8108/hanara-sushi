import "./HomePromotion.css";
import "./Home.css";

const promotion = require("../../assets/promotion.webp");

export default function HomePromotion() {
  return (
    <div className="home-promotion-container home-common-container mg-left-right-auto ">
      <h1 className="home-title-border-left">Special Promotions</h1>

      <div className="home-promotion-flex-container display-flex">
        <div className="home-promotion-imgbox display-flex">
          <img src={promotion} alt="promotion poster"></img>
        </div>

        <div className="home-promotion-textbox display-flex">
          <h2 className="home-promotion-textbox-title">
            1$ Salmon Sushi (1pc)
          </h2>
          <p className="home-promotion-textbox-subtitle">
            Visit Hanara Sushi & Grills, enjoy our fresh & tasty Salmon just for
            a DOLLAR!
          </p>
          <ul className="home-promotion-list-container display-flex">
            <li className="home-promotion-list">Limited to 6 pcs per person</li>
            <li className="home-promotion-list">Dine-in Only</li>
            <li className="home-promotion-list">
              Available every Thursday from 4-7 PM until further notice
            </li>
          </ul>
          <p className="home-promotion-textbox-location">
            Hanara Sushi & Grill
          </p>
          <p className="home-promotion-textbox-location">
            10000 Research Blvd #139 Austin, Tx, 78759
          </p>
          <p className="home-promotion-textbox-location">(512)-520-5001</p>
        </div>
      </div>
    </div>
  );
}
