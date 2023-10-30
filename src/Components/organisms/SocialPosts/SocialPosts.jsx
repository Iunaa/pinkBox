import ButtonLinkColor from "../../atoms/ButtonLinkColor/ButtonLinkColor";
import Title from "../../atoms/Title/Title";
import SocialImages from "../../molecules/SocialImages/SocialImages";
import Styles from "./socialposts.module.scss";

export default function SocialPosts(){
    return (
        <section className={Styles.container}>
            <div className={Styles.content}>
                <Title text={"Social Posts"} />
                <SocialImages />
            </div>
            <ButtonLinkColor label={"Follow us on Instagram"} />
        </section>
    );
}