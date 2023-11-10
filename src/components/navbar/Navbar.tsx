import "./Navbar.css";
import NavbarMobileMenuModal from "./NavbarMobileMenuModal";

import { useState } from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [openMobileModal, setOpenMobileModal] = useState(false);

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

  const handleMobileMenuBar = () => {
    setOpenMobileModal((openMobileModal) => !openMobileModal);
  };

  return (
    <>
      <div className="navbar-bg">
        <div className="navbar-container display-flex mg-left-right-auto">
          <div className="navbar-title-box display-flex">
            <h3
              className="navbar-title"
              onClick={() => {
                navigate("/");
                const BrowserWidth = document.body.scrollWidth;
                if (BrowserWidth <= 1280) {
                  handleMobileMenuBar();
                }
              }}
            >
              Hanara Sushi
            </h3>
          </div>

          <ul className="navbar-menu-box-mobile">
            <button className="navbar-menu-bar" onClick={handleMobileMenuBar}>
              {openMobileModal ? (
                <FontAwesomeIcon icon={faRectangleXmark} size="xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="xl" />
              )}
            </button>
          </ul>

          <ul className="navbar-menu-box display-flex">
            <li className="navbar-menu" onClick={() => handleNavigation("/")}>
              Home
            </li>
            <li
              className="navbar-menu"
              onClick={() => handleNavigation("/menu")}
            >
              Menu
            </li>
            <li
              className="navbar-menu"
              onClick={() =>
                openInNewTab(
                  "https://www.doordash.com/store/hanara-sushi-&-grill-austin-538103/"
                )
              }
            >
              DoorDash
            </li>
            <li
              className="navbar-menu"
              onClick={() =>
                openInNewTab(
                  "https://www.ubereats.com/store/hanara-sushi-%26-grill/L6M5__3yT8Wb6ehcNqgq4Q"
                )
              }
            >
              UberEats
            </li>
            <li
              className="navbar-menu"
              onClick={() =>
                openInNewTab(
                  "https://www.google.com/maps/dir/30.6384402,-96.3332428/UberEats+hanara+sushi/@30.5385667,-98.3568873,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8644cd19fb31201b:0xb2563ab2e51064b2!2m2!1d-97.7485706!2d30.3909983?entry=ttu"
                )
              }
            >
              Directions
            </li>
            {/* <li
              className="navbar-menu"
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </li> */}
          </ul>
        </div>
      </div>

      {openMobileModal ? (
        <NavbarMobileMenuModal
          setOpenMobileModal={setOpenMobileModal}
          handleNavigation={handleNavigation}
        />
      ) : null}
    </>
  );
}
