import Style from "./socialmedia.module.scss"
import instagram from "../../../assets/img/in.png"
import facebook from "../../../assets/img/fb.png";
import twitter from "../../../assets/img/tw.png";
import snapchat from "../../../assets/img/sc.png";

export default function SocialMedia(){
    return (
        <div className={Style.SocialMedia}>
            <img src={instagram} />
            <img src={facebook} />
            <img src={twitter} />
            <img src={snapchat} />
        </div>
    );
}