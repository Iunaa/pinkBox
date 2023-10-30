import Styles from "./socialcard.module.scss";
import PostCard from "../../atoms/PostCard/PostCard";
import SectionText from "../../atoms/SectionText/SectionText";


export default function SocialCard({ src, text, favorite}) {
    return (
        <section className={Styles.container}>
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
