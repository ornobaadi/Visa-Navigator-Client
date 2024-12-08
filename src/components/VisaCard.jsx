/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {

    const { _id, countryPhoto, countryName, visaType, processingTime, requiredDocuments, description, fee, validity, ageRestriction, applicationMethod } = visa;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img className="h-60 w-96 object-cover"
                        src={countryPhoto}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-2xl py-4">
                        {countryName} &nbsp;
                    </h2>
                    <p><span className='font-bold'>Visa Type:</span> {visaType}</p>
                    <p><span className='font-bold'>Processing Time:</span> {processingTime} Days</p>
                    <p><span className='font-bold'>Age Restriction:</span> {ageRestriction}+</p>
                    <p><span className='font-bold'>Fee:</span> ${fee} </p>
                    <div className="card-actions justify-center mt-5">
                        <Link to={`visa-details/${_id}`} className="btn w-full btn-neutral">See Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;