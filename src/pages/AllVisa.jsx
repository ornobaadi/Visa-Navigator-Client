import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";

const AllVisa = () => {

    const visas = useLoaderData();

    return (
        <div className="m-2 md:m-20  ">
            <h1 className="text-center text-3xl font-bold my-10">All Available Visa : {visas.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    visas.map(visa => <VisaCard
                        key={visa._id}
                        visa={visa}
                    ></VisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisa;