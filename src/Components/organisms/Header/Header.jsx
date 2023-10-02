import React from 'react'
import Styles from "../Header/header.module.scss";
import Topbar from "../../../assets/img/Topbar.png";
import Logo from "../../../assets/img/Logo.png";

export const Header = () => {
  return (
      <header>
          <div className={Styles.container}>
              <img
                  className={Styles.container__topBar}
                  src={Topbar}
                  alt="TopBar"
              />
          </div>
          <div className={Styles.content}>
              <img className={Styles.content__logo} src={Logo} />
              <p className={Styles.content__title}>Upbox</p>
              <ul className={Styles.content__list}>
                  <li>This Month</li>
                  <li>Skin</li>
                  <li>Hair</li>
                  <li>Bath</li>
                  <li>Sale</li>
              </ul>
          </div>
      </header>
  );
}
