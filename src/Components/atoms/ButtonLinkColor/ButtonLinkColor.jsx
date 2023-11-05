import Styles from "./buttonlinkcolor.module.scss"


export default function ButtonLinkColor(props){
    const ButtonColorClass = `${Styles.link__anchor} ${props.small ? Styles["link__anchor--small"] : ""} ${props.isSubscribe ? Styles["link__anchor--subscribeButton"] : ""} ${props.className}  `;
    

    return (
        <a onClick={props.onClick ? props.onClick : ""} className={`${ButtonColorClass} ${props.className}`} href="#">
            {props.label}
        </a>
    );

  

}