/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const HomeCard = ({ visa }) => {
    const { _id, countryPhoto, countryName, visaType, processingTime, fee, validity, applicationMethod } = visa;

    return (
            <div className="card bg-base-100 w-full md:w-96 shadow-xl">
                <figure>
                    <img className="h-60 w-full object-cover md:h-60" src={countryPhoto} />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl md:text-4xl py-4">{countryName} &nbsp; 
                    <div className="badge badge-info">NEW</div>
                    </h2>
                    <p><strong>Visa Type:</strong> {visaType}</p>
                    <p><strong>Processing Time:</strong> {processingTime} Days</p>
                    <p><strong>Required Documents:</strong></p>
                    <p><strong>Application Method:</strong> {applicationMethod}</p>
                    <p><strong>Validity:</strong> {validity} Days</p>
                    <p><strong>Fee:</strong> ${fee}</p>
                    <div className="card-actions justify-center mt-5">
                        <Link to={`visa-details/${_id}`} className="btn w-full btn-neutral">See Details</Link>
                    </div>
                </div>
            </div>
    );
};

export default HomeCard;
