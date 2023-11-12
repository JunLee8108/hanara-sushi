import "./Footer.css";

import { useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const brand = require("../../assets/brand.webp");
const dd = require("../../assets/dd.png");
const uber = require("../../assets/uber.png");

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const openInNewTab = (link: string) => {
    const BrowserWidth = document.body.scrollWidth;
    if (BrowserWidth > 1280) {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  const handleNavigation = (link: string) => {
    navigate(link);
    if (location.pathname.includes(link)) {
      navigate("refresh");
      setTimeout(() => {
        navigate(link);
      }, 100);
    }
  };

  return (
    <>
      <div className="footer-container ">
        <div className="footer-content-container display-flex">
          <div className="footer-content-flexbox display-flex-center">
            <h2 className="footer-content-name" onClick={() => navigate("/")}>
              Hanara Sushi
            </h2>
            <img src={brand} alt="brand logo" className="footer-brand-img" />
          </div>
          <div className="footer-content-flexbox display-flex-center">
            <ul className="footer-content-list-container display-flex">
              <li
                className="footer-content-list"
                onClick={() => handleNavigation("/")}
              >
                Home
              </li>

              <li
                className="footer-content-list"
                onClick={() => handleNavigation("/menu")}
              >
                Menu
              </li>

              <div className="footer-content-unique-list">
                <li className="footer-content-list">Order</li>
                <ul className="footer-submenu-container display-flex-center">
                  <li
                    className="footer-submenu-list"
                    onClick={() =>
                      openInNewTab(
                        "https://www.doordash.com/store/hanara-sushi-&-grill-austin-538103/"
                      )
                    }
                  >
                    DoorDash
                  </li>
                  <li
                    className="footer-submenu-list"
                    onClick={() =>
                      openInNewTab(
                        "https://www.ubereats.com/store/hanara-sushi-%26-grill/L6M5__3yT8Wb6ehcNqgq4Q"
                      )
                    }
                  >
                    Uber Eats
                  </li>
                </ul>
              </div>
              <li
                className="footer-content-list"
                onClick={() =>
                  openInNewTab(
                    "https://www.google.com/maps/dir/30.6384402,-96.3332428/UberEats+hanara+sushi/@30.5385667,-98.3568873,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8644cd19fb31201b:0xb2563ab2e51064b2!2m2!1d-97.7485706!2d30.3909983?entry=ttu"
                  )
                }
              >
                Directions
              </li>
            </ul>
          </div>
          <div className="footer-content-flexbox display-flex-center">
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer-icon"
              size="lg"
              onClick={() =>
                openInNewTab(
                  "https://instagram.com/hanarasushi?igshid=NGVhN2U2NjQ0Yg=="
                )
              }
            />
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="footer-icon"
              size="lg"
              onClick={() =>
                openInNewTab(
                  "https://www.google.com/maps/dir/30.6384402,-96.3332428/UberEats+hanara+sushi/@30.5385667,-98.3568873,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8644cd19fb31201b:0xb2563ab2e51064b2!2m2!1d-97.7485706!2d30.3909983?entry=ttu"
                )
              }
            />
            <button className="footer-icon-button">
              <img
                src={dd}
                alt="DoorDash icon"
                onClick={() =>
                  openInNewTab(
                    "https://www.doordash.com/store/hanara-sushi-&-grill-austin-538103/"
                  )
                }
              />
            </button>
            <button className="footer-icon-button-uber">
              <img
                src={uber}
                alt="Uber Eats icon"
                onClick={() =>
                  openInNewTab(
                    "https://www.ubereats.com/store/hanara-sushi-%26-grill/L6M5__3yT8Wb6ehcNqgq4Q"
                  )
                }
              />
            </button>
          </div>
        </div>
        <div className="footer-copyright-container">
          <h6>Copyright ⓒ2023. All Rights Reserved </h6>
        </div>
      </div>
    </>
  );
}
