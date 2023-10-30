import React from "react";
import Styles from "../Header/header.module.scss";
import Topbar from "../../../assets/img/Topbar.png";
import Logo from "../../../assets/img/LogoFooter.png";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";

export default function Header() {
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
                
                <ul className={Styles.content__list}>
                    <li className={Styles.content__element}>This Month</li>
                    <li className={Styles.content__element}>Skin</li>
                    <li className={Styles.content__element}>Hair</li>
                    <li className={Styles.content__element}>Bath</li>
                    <li className={Styles.content__element}>Sale</li>
                    <ButtonLink
                        className={`${Styles.content__btnLink} typography--headerBtn`}
                        label="Log in >"
                    />
                </ul>
            </div>
        </header>
    );
}
