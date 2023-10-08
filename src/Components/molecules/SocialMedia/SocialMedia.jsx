import Style from "./socialmedia.module.scss"
import instagram from "../../../assets/img/in.png"
import facebook from "../../../assets/img/fb.png";
import twitter from "../../../assets/img/tw.png";
import snapchat from "../../../assets/img/sc.png";

export default function SocialMedia(){
    return (
        <div className={Style.SocialMedia}>
            <img className={Style.SocialMedia__icons} src={instagram} />
            <img className={Style.SocialMedia__icons} src={facebook} />
            <img className={Style.SocialMedia__icons} src={twitter} />
            <img className={Style.SocialMedia__icons} src={snapchat} />
        </div>
    );
}