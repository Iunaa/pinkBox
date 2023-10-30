import Styles from "./workcard.module.scss";
import SectionText from "../../atoms/SectionText/SectionText";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";


export default function WorkCard(props) {
    const directionClass = `${Styles.container} ${props.className} ${
        Styles[`container--${props.direction}`]
    } ${Styles[`container--${props.cardDirection}`]}
    ${Styles[`container--${props.size}`]}
    ${Styles[`container--${props.textSize}`]} ${
        Styles[`container--${props.titleSize}`]
    }`;

    return (
        <section>
            <div className={directionClass}>
                <img className={Styles.container__imgwork} src={props.src} />
                <div className={Styles.content}>
                    <SectionTitle
                        className={`${Styles.container__title} typography--h3font`}
                        title={props.title}
                        fontSize={"large"}
                        titleSize={"titlesize"}
                        titleSizeBox = {"titlesizebox"}
                    />
                    <SectionText
                        className={`${Styles.container__paragraph} typograph--p`}
                        text={props.text}
                        fontSize={"smaller"}
                        textSize={"textsize"}
                        size={"paragraphsize"}
                    />
                </div>
            </div>
        </section>
    );
}
