import Styles from "./socialimages.module.scss";
import Images from "../../atoms/Cards/Cards";
import Text from "../../atoms/Text/Text";
import img1 from "../../../assets/img/img1.png"
import img2 from "../../../assets/img/img2.png";
import img3 from "../../../assets/img/img3.png";
import img4 from "../../../assets/img/img4.png";

export default function SocialImages() {
    return (
        <section className={Styles.container}>
            <div className={Styles.content}>
                <Images src={img1} />
                <Text
                    text={"How to rock the lip look that turns heads"}
                    large={true}
                />
            </div>

            <div className={Styles.content}>
                <Images src={img2} />
                <Text
                    text={"Find the perfect shade for the season"}
                    large={true}
                />
            </div>

            <div className={Styles.content}>
                <Images src={img3} />
                <Text
                    text={"The 5 eye shadow secrets you never knew"}
                    large={true}
                />
            </div>

            <div className={Styles.content}>
                <Images src={img4} />
                <Text
                    text={"The pro-tips for at home hair dying"}
                    large={true}
                />
            </div>
        </section>
    );
}
