/* eslint-disable react/prop-types */

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
                    <h2 className="card-title">Name:
                        {countryName}
                        <div className="badge badge-info">NEW</div>
                    </h2>
                    <p>Processing Time: {processingTime} Days</p>
                    <p>Validity: {validity} Days</p>
                    <p>Fee: <span className="font-bold">${fee}</span> </p>
                    <div className="card-actions justify-center mt-5">
                        <button className="btn w-full btn-neutral">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;