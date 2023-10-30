import Style from "./cardimage.module.scss";

export default function CardImage(props) {
    return (
       
            <img className={Style.container} src={props.src} />
       
    );
}
