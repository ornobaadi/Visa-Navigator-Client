import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import MyVisa from "../components/MyVisa";

const MyAddedVisa = () => {
    const loadedVisas = useLoaderData();
    const [visas, setVisas] = useState(loadedVisas);

    return (
        <div className="m-2 md:m-20">
            <h1 className="text-center text-3xl font-bold my-10">My Added Visa: {visas.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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