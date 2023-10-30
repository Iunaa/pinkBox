import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import SectionText from "../../atoms/SectionText/SectionText";
import Styles from "./texthero.module.scss";
import ButtonLink from "../../atoms/ButtonLink/ButtonLink";

export default function TextHero({ text, label, title }) {
    return (
        <div className={Styles.container}>
            <SectionTitle
                className={`${Styles.container__title} typography--h1`}
                title={title}
            />
            <SectionText
                className={`${Styles.container__paragraph} typography--p`}
                text={text}
            />
            <ButtonLink
                className={`${Styles.container__btnLink} typography--textBtn`}
                label={label}
                colorBorder={"pink"}
            />
        </div>
    );
}
