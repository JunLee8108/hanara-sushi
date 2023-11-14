import "./HomeContact.css";
import "./Home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function HomeContact() {
  return (
    <div className="home-contact-container home-common-container mg-left-right-auto ">
      <h1 className="home-title-border-left">Contact Us</h1>

      <div className="home-contact-textbox">
        <p className="home-contact-text mg-left-right-auto">
          Have questions? We are here to assist you. Contact our friendly staff
          via phone or email to discover more about our restaurant, menus, and
          any special arrangements you may need.
        </p>

        <div className="home-contact-flex-container display-flex-center mg-left-right-auto">
          <div className="home-contact-flexbox display-flex-center">
            <h2 className="home-contact-flexbox-title">
              Phone{" "}
              <FontAwesomeIcon
                icon={faPhone}
                style={{ marginLeft: "5px" }}
                size="sm"
              />
            </h2>
            <p>512-520-5001</p>
          </div>
          <div className="home-contact-flexbox display-flex-center">
            <h2 className="home-contact-flexbox-title">
              Email{" "}
              <FontAwesomeIcon
                icon={faAt}
                style={{ marginLeft: "5px" }}
                size="sm"
              />
            </h2>
            <p>Hanarasushi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
