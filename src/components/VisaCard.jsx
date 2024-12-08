import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {
    const { _id, countryPhoto, countryName, visaType, processingTime, fee, ageRestriction } = visa;

    return (
        <div className="card bg-base-100 shadow-xl w-full">
            <figure>
                <img
                    src={countryPhoto}
                    alt={`${countryName} photo`}
                    className="h-40 sm:h-48 lg:h-60 w-full object-cover"
                />
            </figure>
            <div className="card-body p-4 sm:p-6">
                <h2 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">
                    {countryName}
                </h2>
                <p className="text-sm md:text-base">
                    <span className="font-bold">Visa Type:</span> {visaType}
                </p>
                <p className="text-sm md:text-base">
                    <span className="font-bold">Processing Time:</span> {processingTime} Days
                </p>
                <p className="text-sm md:text-base">
                    <span className="font-bold">Age Restriction:</span> {ageRestriction}+
                </p>
                <p className="text-sm md:text-base">
                    <span className="font-bold">Fee:</span> ${fee}
                </p>
                <div className="card-actions justify-center mt-4">
                    <Link to={`visa-details/${_id}`} className="btn btn-sm md:btn-md w-full btn-neutral">
                        See Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;
