import "./HomeLocation.css";
import "./Home.css";

export default function HomeLocation() {
  return (
    <div className="home-location-container home-common-container mg-left-right-auto ">
      <h1 className="home-title-border-left">Location & Hours</h1>

      <div className="home-location-flex-container display-flex">
        <div className="home-location-hour-flex-container display-flex mg-left-right-auto">
          <div className="home-location-flexbox">
            <h3>Location</h3>
            <p>10000 Research Blvd #139</p>
            <p>Austin, TX 78759</p>
          </div>
          <div className="home-location-flexbox">
            <h3>Hours</h3>
            <p>Monday - Saturday: 11 AM - 8:30 PM</p>
            <p>Sunday: 12 PM - 6:30 PM</p>
          </div>
        </div>

        <div className="home-location-review-box">
          <p className="home-location-review mg-left-right-auto">
            "So amazing! The staff was super friendly and accommodating. The
            food was great, and great prices too! Wonderful restaurant,
            definitely worth the visit!" -{" "}
            <span className="home-location-review-writer">
              Brooke Tjelemeland
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
