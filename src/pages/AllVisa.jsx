import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import VisaCard from "../components/VisaCard";

const AllVisa = () => {
    const visas = useLoaderData();
    const [selectedVisaType, setSelectedVisaType] = useState("All");

    const handleFilterChange = (e) => {
        setSelectedVisaType(e.target.value);
    };

    const filteredVisas =
        selectedVisaType === "All"
            ? visas
            : visas.filter(visa => visa.visaType === selectedVisaType);

    const visaTypes = ["All", ...new Set(visas.map(visa => visa.visaType))];

    return (
        <div className="p-4 md:p-10 lg:p-20">
            <h1 className="text-center text-xl md:text-3xl font-bold my-5 md:my-10">
                Available Visa: {filteredVisas.length}
            </h1>

            <div className="flex justify-start mb-4 md:mb-6">
                <select
                    value={selectedVisaType}
                    onChange={handleFilterChange}
                    className="select select-bordered w-full max-w-xs md:max-w-sm lg:max-w-md"
                >
                    {visaTypes.map((type, index) => (
                        <option key={index} value={type}>
                            {type}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredVisas.map(visa => (
                    <VisaCard key={visa._id} visa={visa}></VisaCard>
                ))}
            </div>
        </div>
    );
};

export default AllVisa;
