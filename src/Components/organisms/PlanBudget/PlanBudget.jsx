import CardPlan from "../../molecules/CardPlan/CardPlan";
import SectionTitle from "../../atoms/SectionTitle/SectionTitle";
import underline from "../../../assets/img/underline.png";
import Styles from "./planbudget.module.scss";

export default function PlanBudget() {
    return (
        <>
            <section className={Styles.holder}>
                <SectionTitle
                    title={"Pick your plan"}
                    className={`${Styles.holder__planBudget} typography--h2 `}
                />
                <img className={Styles.holder__underline} src={underline} />
                <div className={Styles.content}>
                    <div className={Styles.content__cardPlan}>
                        <CardPlan
                            planCategoryText={"Monthly"}
                            planValueText={"$18/mo"}
                            color={"pink"}
                        />
                    </div>
                    <div className={Styles.content__cardPlan}>
                        <CardPlan
                            planCategoryText={"Yearly"}
                            planValueText={"$15/mo"}
                            color={"blue"}
                        />
                    </div>
                </div>
                <p className={`${Styles.holder__paragraph} typography--paragraph`}>
                    Your plan auto-renews at the end of 30 days from the 1st day
                    you signed-up.
                </p>
            </section>
        </>
    );
}
