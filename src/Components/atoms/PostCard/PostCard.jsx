import Styles from "./postcard.module.scss";
import Star from "../../../assets/img/star.png";

export default function PostCard(props) {
    const FavoriteCard = `${Styles.PostCard} ${
        props.favorite ? Styles["PostCard--favorite"] : Styles["PostCard"]
    }`;

    return (
        <div className={FavoriteCard}>
            {props.favorite ? (
                <>
                    <img className={Styles.PostCard__img} src={props.src} />
                    <div className={Styles.favoriteIcon}>
                        <img src={Star} />
                    </div>
                </>
            ) : (
                <img className={Styles.PostCard__img} src={props.src} />
            )}
        </div>
    );
}
