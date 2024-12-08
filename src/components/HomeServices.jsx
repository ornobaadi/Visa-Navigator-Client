import { Link } from "react-router-dom";
import { FaPlane, FaBriefcase, FaGraduationCap } from "react-icons/fa";

const services = [
    {
        id: 1,
        title: "Tourist Visa - USA",
        description:
            "Processing time: 2-4 weeks. Documents required: Passport, photo, financial proof. Apply online or visit the embassy.",
        link: "/allvisa",
        icon: <FaPlane />,
    },
    {
        id: 2,
        title: "Work Visa - Canada",
        description:
            "Processing time: 4-8 weeks. Documents required: Job offer, passport, photo, financial proof. Apply online.",
        link: "/allvisa",
        icon: <FaBriefcase />,
    },
    {
        id: 3,
        title: "Student Visa - UK",
        description:
            "Processing time: 3-6 weeks. Documents required: Admission letter, financial proof, passport. Application via the official portal.",
        link: "/allvisa",
        icon: <FaGraduationCap />,
    },
];

const HomeServices = () => {
    return (
        <section className="overflow-hidden py-10 w-11/12 mx-auto">
            <h1 className="text-center text-4xl mb-6 mt-20 font-bold ">
                Explore Our Visa Collections
            </h1>
            <div className="mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((visa) => (
                        <div key={visa.id} className="service__item shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow relative">
                            <div className="text-4xl text-lime-600 pt-5 flex">
                                {visa.icon}
                            </div>
                            <h4 className="text-2xl my-10 font-semibold text-[#034833] dark:text-lime-600">
                                <Link to={visa.link} className="hover:underline">
                                    {visa.title}
                                </Link>
                            </h4>
                            <p className="text-md mb-5">{visa.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
