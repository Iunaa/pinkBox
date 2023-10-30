import Styles from "./cardplan.module.scss";
import SectionText from "../../atoms/SectionText/SectionText";
import ButtonLinkColor from "../../atoms/ButtonLinkColor/ButtonLinkColor";

export default function CardPlan({ planCategoryText, planValueText, color }) {
    const CardClass = `${Styles.CardPlan} ${Styles[`CardPlan--${color}`]}`;
    return (
        <div className={CardClass}>
            <SectionText
                text={planCategoryText}
                className="typography--span"

                fontSize={"medium"}
            />
            <SectionText
                text={planValueText}
                className="typography--spanfont"
                fontSize={"regular"}
            />

            <ButtonLinkColor
                label={"FIND YOUR BOX"}
                className="typography--a"
                small={true}
            />
        </div>
    );
}
