import Styles from "./postcard.module.scss";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function PostCard(props) {

    
    const FavoriteCard = `${Styles.PostCard} ${
        props.favorite ? Styles["PostCard--favorite"] : ""
    }`;
    return (
        <div>
            <img
                className={FavoriteCard}
                src={props.src}
               
            />
            {props.favorite ? <FavoriteButton/> : ""}
        </div>
    );
}
