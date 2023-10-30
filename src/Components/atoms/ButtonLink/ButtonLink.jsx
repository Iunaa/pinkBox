import React from "react";
import Styles from "../ButtonLink/buttonlink.module.scss";

export default function ButtonLink(props) {
    const ButtonClass = `${Styles.link__anchor} ${
        props.border ? Styles["link__anchor--border"] : ""
    } ${Styles[`link__anchor--${props.colorBorder}`]}  ${props.className} `;
    return (
        <a className={ButtonClass} href="/preferences">
            {props.label}
        </a>
    );
}
