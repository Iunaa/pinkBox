
import SectionText from "../../atoms/SectionText/SectionText";
import Styles from "./menulist.module.scss";
import TitleList from "../../atoms/TitleList/TitleList";

export default function MenuList() {
    return (
        <div className={Styles.container}>
            <div className={Styles.container__menuitem}>
                <TitleList title={"UPBOX"} />
                <ul>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Upbox Bag"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Upbox Box Platinum"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Upbox Box VIP"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Deals"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Seasonal Items"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Upbox Promise"} />
                    </li>
                </ul>
            </div>

            <div className={Styles.container__menuitem}>
                <TitleList title={"Product"} />
                <ul>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Get the App"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Loyalty Program"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Affiliates"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Press"} />
                    </li>
                </ul>
            </div>
            <div className={Styles.container__menuitem}>
                <TitleList title={"Find Us On"} />
                <ul>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Instagram"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Facebook"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"TikTok"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"SnapChat"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Twitter"} />
                    </li>
                </ul>
            </div>
            <div className={Styles.container__menuitem}>
                <TitleList title={"Help"} />
                <ul>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Returns"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"FAQ"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Contact"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Community"} />
                    </li>
                    <li
                        className={`${Styles.container__element} typography--list`}
                    >
                        <SectionText text={"Videos"} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
