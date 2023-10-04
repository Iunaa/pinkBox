import Title from "../../atoms/Title/Title";
import Text from "../../atoms/Text/Text";
import styles from "./menulist.module.scss";

export default function MenuList() {
    return (
        <div className={styles.container}>
            <div className={styles.container__menuitem}>
                <Title text={"UPBOX"} />
                <ul>
                    <li className={styles.container__element}>
                        <Text text={"Upbox Bag"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Upbox Box Platinum"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Upbox Box VIP"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Deals"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Seasonal Items"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Upbox Promise"} />
                    </li>
                </ul>
            </div>

            <div className={styles.container__menuitem}>
                <Title text={"Product"} />
                <ul>
                    <li className={styles.container__element}>
                        <Text text={"Get the App"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Loyalty Program"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Affiliates"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Press"} />
                    </li>
                </ul>
            </div>
            <div className={styles.container__menuitem}>
                <Title text={"Find Us On"} />
                <ul>
                    <li className={styles.container__element}>
                        <Text text={"Instagram"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Facebook"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"TikTok"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"SnapChat"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Twitter"} />
                    </li>
                </ul>
            </div>
            <div className={styles.container__menuitem}>
                <Title text={"Help"} />
                <ul>
                    <li className={styles.container__element}>
                        <Text text={"FAQ"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Contact"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Community"} />
                    </li>
                    <li className={styles.container__element}>
                        <Text text={"Videos"} />
                    </li>
                </ul>
            </div>
        </div>
    );
}
