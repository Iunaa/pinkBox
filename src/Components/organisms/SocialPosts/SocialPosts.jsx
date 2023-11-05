import Styles from "../SocialPosts/socialPosts.module.scss";
import ButtonLinkColor from "../../atoms/ButtonLinkColor/ButtonLinkColor";
import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import SocialCard from "../../molecules/SocialCard/SocialCard";

export default function SocialPosts() {
    return (
        <section className={Styles.container}>
            <div className={Styles.content}>
                <h2 className={`${Styles.content__title} typography--h2`}>
                    Social Posts
                </h2>
                <div className={Styles.content__Social}>
                    <SocialCard
                        src={img1}
                        text={"How to rock the lip look that turns heads"}
                        large={true}
                        favorite={false}
                    />

                    <SocialCard
                        src={img2}
                        text={"Find the perfect shade for the season"}
                        large={true}
                        favorite={false}
                    />

                    <SocialCard
                        src={img3}
                        text={"The 5 eye shadow secrets you never knew"}
                        large={true}
                        favorite={false}
                    />

                    <SocialCard
                        src={img4}
                        text={"The pro-tips for at home hair dying"}
                        large={true}
                        favorite={false}
                    />
                </div>
            </div>
            <ButtonLinkColor
                className={`${Styles.container__btnLink} typography--btnPink`}
                label={"Follow us on Instagram"}
            />
        </section>
    );
}
