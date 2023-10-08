import Styles from "./cards.module.scss";

export default function Cards(props){
    
    return <img className={Styles.img} src={props.src}/>;


}
