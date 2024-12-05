import { useLoaderData } from "react-router-dom";

const UpdateVisa = () => {

    const visa = useLoaderData();
    const { _id, countryPhoto, countryName, visaType, processingTime, requiredDocuments, description, fee, validity, applicationMethod } = visa;

    return (
        <div>
            <h2>Update: {countryName}</h2>
        </div>
    );
};

export default UpdateVisa;