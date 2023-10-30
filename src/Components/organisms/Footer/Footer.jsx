import Styles from "./footer.module.scss";
import LogoFooter from "../../../assets/img/LogoFooter.png";
import MenuList from "../../molecules/MenuList/MenuList";
import SocialMedia from "../../molecules/SocialMedia/SocialMedia";

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__footertop}>
                <div className={Styles.content}>
                    <div className={Styles.content__logotitle}>
                        <img className={Styles.content__logoFooter} src={LogoFooter} />
                        
                    </div>
                    <SocialMedia />
                </div>
                <MenuList />
            </div>

            <hr className={Styles.footer__hr} />
            <div className={Styles.footer__terms}>
                <a className={`${Styles.footer__subtile} typography--a`}>
                    Terms
                </a>
                <a className={`${Styles.footer__privacy} typography--a`}>
                    Privacy Policy
                </a>
            </div>
            <p className={`${Styles.footer__paragraph} typography--copy`}>
                © 2020 Quest AI. Upbox is a Sample Project and open source
                design project free for personal and commercial use.
            </p>
        </footer>
    );
}
