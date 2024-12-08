import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MyVisa from "../components/MyVisa";

const MyAddedVisa = () => {
    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);

    return (
        <div className="p-4 md:p-10 lg:p-20">
            <h1 className="text-center text-2xl md:text-3xl font-bold my-6">
                My Added Visa: {visas.length}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visas.map(visa => (
                    <MyVisa
                        key={visa._id}
                        visa={visa}
                        visas={visas}
                        setVisas={setVisas}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyAddedVisa;
