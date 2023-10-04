import Styles from "./footer.module.scss";
import Logo from "../../../assets/img/Logo.png";
import Text from "../../molecules/MenuList/MenuList";
import MenuList from "../../molecules/MenuList/MenuList";
import SocialMedia from "../../molecules/SocialMedia/SocialMedia";

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.content}>
                <img className={Styles.content__logo} src={Logo} />
                <p className={Styles.content__title}>Upbox</p>
                <SocialMedia/>
            </div>
            <MenuList />

            <hr className={Styles.footer__hr} />
            <div className={Styles.footer__terms}>
                <h2 className={Styles.footer__subtile}>Terms</h2>
                <h2 className={Styles.footer__privacy}>Privacy Policy</h2>
            </div>
            <p className={Styles.footer__paragraph}>
                © 2020 Quest AI. Upbox is a Sample Project and open source
                design project free for personal and commercial use.
            </p>
        </footer>
    );
}
