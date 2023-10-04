import Style from "./text.module.scss"


export default function Text(props) {
    return(
        
            <span className={Style.text}>{props.text}</span>
        
    )
}