import Styles from "./sectiontext.module.scss";

export default function SectionText(props) {
    const TextClass = `${Styles.sectionText} ${
        props.large ? Styles["sectionText--large"] : ""
    } ${props.className} ${Styles[`sectionText--${props.fontSize}`]} 
    }`;
 
    return <span className={TextClass}>{props.text}</span>;
}
