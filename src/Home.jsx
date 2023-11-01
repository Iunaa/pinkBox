import BoxHero from "./Components/organisms/BoxHero/BoxHero";
import PlanBudget from "./Components/organisms/PlanBudget/PlanBudget";
import SocialPosts from "./Components/organisms/SocialPosts/SocialPosts";
import WorkSection from "./Components/organisms/WorkSection/WorkSection";

export default function Home() {
    return (
        <>
            <BoxHero />
            <PlanBudget />
            <WorkSection />
            <SocialPosts />
        </>
    );
}
