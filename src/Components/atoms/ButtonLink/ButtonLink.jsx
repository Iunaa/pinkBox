import React from 'react'
import Styles from "../ButtonLink/buttonlink.module.scss"

export default function ButtonLink (props){

    
    return (
        <div className={Styles.link}>
            <a className={Styles.link__anchor}>{props.label}</a>
        </div>
    );


}

