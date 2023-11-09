import "./Navbar.css";

import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-bg">
        <div className="navbar-container display-flex mg-left-right-auto">
          <div className="navbar-title-box display-flex">
            <h3 className="navbar-title" onClick={() => navigate("/")}>
              Hanara Sushi
            </h3>
          </div>

          <ul className="navbar-menu-box display-flex">
            <li className="navbar-menu" onClick={() => navigate("/menu")}>
              Menu
            </li>
            <li className="navbar-menu">DoorDash</li>
            <li className="navbar-menu">UberEats</li>
            <li className="navbar-menu">Direction</li>
          </ul>
        </div>
      </div>
    </>
  );
}
