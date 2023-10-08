import Styles from "./text.module.scss";

export default function Text(props) {
    const TextClass = `${Styles.text} ${
        props.large ? Styles["text--large"] : ""
    }`;
    return <span className={TextClass}>{props.text}</span>;
}
