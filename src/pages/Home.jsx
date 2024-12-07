import HomeBanner from "../components/HomeBanner";
import HomeServices from "../components/HomeServices";
import { useLoaderData } from "react-router-dom";

const Home = () => {
    const visas = useLoaderData();

    return (
        <div>
            <HomeBanner />
            <HomeServices />
        </div>
    );
};

export default Home;
