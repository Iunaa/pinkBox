import TextHero from "../../molecules/TextHero/TextHero";
import Styles from "./boxhero.module.scss";


export default function BoxHero() {
    return (
        <section className={Styles.BoxHero}>
            <div className={Styles.content}>
                <TextHero
                    title={"Look good without\n leaving your house."}
                    text={
                        "Upbox is the easiest way to look your best without having to hunt for the perfect makeup combination. Our stylists curate the latest trends and send them directly to your door every month."
                    }
                    label={"SIGN UP >"}
                />
            </div>
        </section>
    );
}