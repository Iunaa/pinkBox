import React from 'react'
import Styles from "./titleList.module.scss"

export default function TitleList(props) {
    const TitleListClass = `${Styles.titleList} ${props.className}`

    return(
        <h4 className={TitleListClass}>{props.title}</h4>
    );
}