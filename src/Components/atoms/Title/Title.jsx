import React from 'react'
import Style from "./title.module.scss"

export default function Title(props){
    return(
        <h2 className={Style.title}>{props.text}</h2>
    )
}