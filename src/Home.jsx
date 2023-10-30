import BoxHero from "./Components/organisms/BoxHero/BoxHero";
import PlanBudget from "./Components/organisms/PlanBudget/PlanBudget";
import SocialPostsReal from "./Components/organisms/SocialPostsReal/SocialPostsReal";
import WorkSection from "./Components/organisms/WorkSection/WorkSection";

export default function Home() {
    return (
        <>
            <BoxHero />
            <PlanBudget />
            <WorkSection />
            <SocialPostsReal />
        </>
    );
}
