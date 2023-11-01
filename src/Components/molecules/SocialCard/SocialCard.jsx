import Styles from "./socialcard.module.scss";
import PostCard from "../../atoms/PostCard/PostCard";
import SectionText from "../../atoms/SectionText/SectionText";

export default function SocialCard({ src, text, favorite }) {
    const FavoriteContainer = `${Styles.container} ${
        favorite ? Styles["container--favorite"] : Styles["container"]
    }`;
    return (
        <section className={FavoriteContainer}>
            <div className={Styles.content}>
                <PostCard
                    className={Styles.content__img}
                    src={src}
                    favorite={favorite}
                />
                <SectionText
                    className={Styles.content__text}
                    text={text}
                    fontSize={"socialPosts"}
                />
            </div>
        </section>
    );
}
