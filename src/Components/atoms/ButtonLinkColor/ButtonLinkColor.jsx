import Styles from "./buttonlinkcolor.module.scss"


export default function ButtonLinkColor(props){
    const ButtonColorClass = `${Styles.link__anchor} ${props.small ? Styles["link__anchor--small"] : ""} ${props.className} `;

    return (
        <a className={`${ButtonColorClass} ${props.className}`} href="#">
            {props.label}
        </a>
    );


}