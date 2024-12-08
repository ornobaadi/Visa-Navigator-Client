import HomeBanner from "../components/HomeBanner";
import HomeServices from "../components/HomeServices";
import HomeSuccess from "../components/HomeSuccess";
import LatestSix from "../components/LatestSix";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <LatestSix />
            <HomeServices />
            <HomeSuccess />

        </div>
    );
};

export default Home;
