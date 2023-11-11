import "./Menu.css";
import { menuButton } from "../../components/util/data";
import { menuList } from "../../components/util/sushiMenuData";

import { Fragment } from "react";
import { useState } from "react";

const filteredSushiList = menuList.filter((data) =>
  data.id.replaceAll(" ", "").includes("SUSHI")
);

export default function Menu() {
  const [menuChoice, setMenuChoice] = useState(filteredSushiList);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChocie = (e: React.MouseEvent) => {
    // window.scrollTo(0, 0);

    const target = (e.target as HTMLElement).innerHTML.replaceAll(" ", "");

    if (target.includes("SUSHI")) {
      setActiveIndex(0);
    } else if (target.includes("KITCHEN")) {
      setActiveIndex(1);
    } else if (target.includes("SIDES")) {
      setActiveIndex(2);
    } else if (target.includes("DRINKS")) {
      setActiveIndex(3);
    }

    let filteredData = [...menuChoice];

    filteredData = menuList.filter((data) =>
      data.id.replaceAll(" ", "").includes(target)
    );

    setMenuChoice(filteredData);
  };

  return (
    <div className="menu-container">
      <h1 className="menu-title">Hanara Sushi & Grill</h1>
      <h2 className="menu-title-menu">Menu</h2>

      <div className="menu-button-container display-flex-center">
        {menuButton.map((content, index) => {
          return (
            <button
              className={`menu-button ${
                activeIndex === index ? "menu-active-button" : null
              }`}
              key={index}
              onClick={(e) => handleChocie(e)}
            >
              {content}
            </button>
          );
        })}
      </div>

      <div className="menu-section">
        {menuChoice.map((content, index) => {
          return (
            <Fragment key={index}>
              {content.menuSubtitle.map(
                (menuSubtitleContent, menuSubtitleIndex) => {
                  return (
                    <Fragment key={menuSubtitleIndex}>
                      <h2 className="menu-subtitle">
                        {menuSubtitleContent.subtitle}
                      </h2>
                      <ul className="menu-list">
                        {menuSubtitleContent.menuName.map(
                          (menuNameContent, menuNameIndex) => {
                            return (
                              <li className="menu-item" key={menuNameIndex}>
                                <span className="menu-item-name">
                                  {menuNameContent.menuName}
                                </span>
                                <span
                                  className={`menu-item-description ${
                                    !menuNameContent.menuDescription
                                      ? "menu-item-description-empty"
                                      : null
                                  }`}
                                >
                                  {menuNameContent.menuDescription}
                                </span>
                                <span className="menu-item-price">
                                  {menuNameContent.menuPrice}
                                </span>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </Fragment>
                  );
                }
              )}
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
