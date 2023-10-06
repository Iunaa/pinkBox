import Styles from "./buttonlinkcolor.module.scss"


export default function ButtonLinkColor(props){

    return(
    
      <a className={Styles.link__anchor}>{props.label}</a>
    )


}