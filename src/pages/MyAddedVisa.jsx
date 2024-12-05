import { useLoaderData } from "react-router-dom";
import VisaCard from "../components/VisaCard";
import MyVisa from "../components/MyVisa";

const MyAddedVisa = () => {
    const visas = useLoaderData();

    return (
        <div className="m-2 md:m-20">
            <h1 className="text-center text-3xl font-bold my-10">My Added Visa : {visas.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                {
                    visas.map(visa => <MyVisa
                        key={visa._id}
                        visa={visa}
                    ></MyVisa>)
                }
            </div>
        </div>
    );
};

export default MyAddedVisa;