import "./NavbarMobileMenuModal.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faBookOpen,
  faBowlFood,
  faBurger,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

export default function NavbarMobileMenuModal({
  handleNavigation,
  setHandleMobileModal,
  handleMobileModal,
}: {
  setHandleMobileModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleNavigation: (link: string) => void;
  handleMobileModal: boolean;
}) {
  const openExternalLink = (link: string) => {
    window.location.href = link;
  };

  return (
    <>
      <div
        className={
          handleMobileModal
            ? "navbar-mobile-modal-bg animated-bg"
            : "navbar-mobile-modal-bg animated-hide"
        }
      >
        <div
          className={
            handleMobileModal
              ? "navbar-mobile-modal-container animated"
              : "navbar-mobile-modal-container animated-hide"
          }
        >
          <div className="navbar-mobile-border-line mg-left-right-auto"></div>

          <ul className="navbar-mobile-menu-container display-flex">
            <li
              className="navbar-mobile-menu"
              onClick={() => {
                handleNavigation("/");
                setHandleMobileModal(false);
              }}
            >
              <FontAwesomeIcon
                icon={faPaperPlane}
                style={{ marginRight: "10px" }}
                size="sm"
              />
              Home
            </li>
            <li
              className="navbar-mobile-menu"
              onClick={() => {
                handleNavigation("/menu");
                setHandleMobileModal(false);
              }}
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                style={{ marginRight: "10px" }}
                size="sm"
              />
              Menu
            </li>
            <li
              className="navbar-mobile-menu"
              onClick={() =>
                openExternalLink(
                  "https://www.doordash.com/store/hanara-sushi-&-grill-austin-538103/"
                )
              }
            >
              <FontAwesomeIcon
                icon={faBowlFood}
                style={{ marginRight: "10px" }}
                size="sm"
              />
              DoorDash
            </li>
            <li
              className="navbar-mobile-menu"
              onClick={() =>
                openExternalLink(
                  "https://www.ubereats.com/store/hanara-sushi-%26-grill/L6M5__3yT8Wb6ehcNqgq4Q"
                )
              }
            >
              <FontAwesomeIcon
                icon={faBurger}
                style={{ marginRight: "10px" }}
                size="sm"
              />
              UberEats
            </li>
            <li
              className="navbar-mobile-menu"
              onClick={() =>
                openExternalLink(
                  "https://www.google.com/maps/dir/30.6384402,-96.3332428/UberEats+hanara+sushi/@30.5385667,-98.3568873,8z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8644cd19fb31201b:0xb2563ab2e51064b2!2m2!1d-97.7485706!2d30.3909983?entry=ttu"
                )
              }
            >
              <FontAwesomeIcon
                icon={faRoute}
                style={{ marginRight: "10px" }}
                size="sm"
              />
              Directions
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
