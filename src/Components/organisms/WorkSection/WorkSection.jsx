import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import Styles from "./worksection.module.scss";
import work1 from "../../../assets/img/work1.png";
import work2 from "../../../assets/img/work2.png";
import work3 from "../../../assets/img/work3.png";
import work4 from "../../../assets/img/work4.png";
import underline2 from "../../../assets/img/underline2.png";
import WorkCard from "../../molecules/WorkCard/WorkCard";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";
import { useNavigate } from "react-router-dom";

export default function WorkSection() {
    const navigate = useNavigate();

    return (
        <section className={Styles.container}>
            <div className={Styles.container__allCards}>
                <div className={Styles.container__titleUnderline}>
                    <SectionTitle
                        title={"How it works?"}
                        fontSize={"larger"}
                        className={Styles.container__title}
                    />
                    <img
                        className={Styles.container__underline}
                        src={underline2}
                    />
                </div>
                <div className={Styles.container__Card}>
                    <WorkCard
                        src={work1}
                        title={"Setup your profile & preferences"}
                        text={
                            "Once you create an account, you can start to tell us your likes and dislikes so we can tailor the experience just for you."
                        }
                        direction={"row"}
                    />
                </div>
                <div className={Styles.container__Card2}>
                    <WorkCard
                        src={work4}
                        title={"Review your\n custom box"}
                        titleSize={"titlesize"}
                        text={
                            "Once we get to know you, we will show you the box we’ve crafted. This is your chance to approve it before we ship it to your house."
                        }
                        direction={"rowReverse"}
                        cardDirection={"column"}
                    />
                </div>
                <div className={Styles.container__Card}>
                    <WorkCard
                        src={work3}
                        title={`Try it on at home`}
                        titleSize={"titlesize"}
                        text={
                            "Your box will arrive within 3-5 days (usually sooner) and you get the joy to unbox your Upbox. Try it all on and send back whatever you’re not in love with."
                        }
                        textSize={"textsize"}
                        direction={"row"}
                    />
                </div>
            </div>
            <ButtonLink
                onClick={() => {
                    navigate("/preferences");
                }}
                className={`${Styles.container__btnLink} typography--btnPinkBorder`}
                colorBorder={"pink"}
                label={"TRY IT FOR YOURSELF >"}
            />
        </section>
    );
}
