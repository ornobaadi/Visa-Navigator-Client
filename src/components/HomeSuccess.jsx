import { FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const HomeSuccess = () => {
    return (
        <section className=" py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
                {/* Left Image Section */}
                <div className="flex-1">
                    <img
                        src="https://media.istockphoto.com/id/1306083880/photo/young-woman-tourist-in-a-city-traveler-girl-portrait.jpg?s=612x612&w=0&k=20&c=oQMP8vB2WTpVz5D5ko2PPRtRp97v949Y8-_gnOCAS9g="
                        alt="Passport Holder"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                {/* Right Content Section */}
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="bg-green-100 p-3 rounded-full">
                            <FaAngleDoubleUp />
                        </div>
                        <h3 className="text-2xl font-semibold text-green-700">
                            Get our best offers quickly
                        </h3>
                    </div>
                    <p className="text-gray-600">
                        Find the ideal visa option for your travel plans, whether
                        you&apos;re a student, worker, or tourist. Explore your eligibility
                        today and take the first step towards a seamless travel experience.
                    </p>
                    <Link
                        to="/allvisa"
                        className="btn btn-neutral rounded-lg text-white px-6 py-2"
                    >
                        Explore More
                    </Link>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="mt-12 bg-green-100 py-10 rounded-lg flex justify-evenly text-center">
                <Fade cascade damping={0.3}>
                    <div>
                        <h4 className="text-3xl font-bold text-green-800">10k+</h4>
                        <p className="text-gray-600">Complete projects</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-green-800">20+</h4>
                        <p className="text-gray-600">Team members</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-green-800">5k+</h4>
                        <p className="text-gray-600">Winning awards</p>
                    </div>
                    <div>
                        <h4 className="text-3xl font-bold text-green-800">100+</h4>
                        <p className="text-gray-600">Ongoing projects</p>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default HomeSuccess;
