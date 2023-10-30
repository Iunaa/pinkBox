import Styles from "./images.module.scss";

export default function Images(props){
    
    return <img className={Styles.img} src={props.src}/>;


}
