import ButtonLinkColor from "../../atoms/ButtonLinkColor/ButtonLinkColor";
import img1 from "../../../assets/img/img1.png";
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";
import SocialCard from "../../molecules/SocialCard/SocialCard";
import Styles from "./socialposts.module.scss";


export default function SocialPosts({  }) {
    // {
    //     favorite ? (
    //         <AiFillHeart color="#EE8094" size={32} />
    //     ) : (
    //         <AiOutlineHeart color="#EE8094" size={32} />
    //     );
    // }

    return (
        <section className={Styles.container}>
            <div className={Styles.content}>
                <h2 className={`${Styles.content__title} typography--h2`}>
                    Social Posts
                </h2>
                <div className={Styles.content__Social}>
                    <SocialCard
                        favorite={true}
                        src={img1}
                        text={"How to rock the lip look that turns heads"}
                        large={true}
                    />

                    <SocialCard
                        src={img2}
                        text={"Find the perfect shade for the season"}
                        large={true}
                    />

                    <SocialCard
                        src={img3}
                        text={"The 5 eye shadow secrets you never knew"}
                        large={true}
                        favorite={true}
                    />

                    <SocialCard
                        src={img4}
                        text={"The pro-tips for at home hair dying"}
                        large={true}
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
