import { useLoaderData } from 'react-router-dom';

const VisaDetails = () => {
    const visa = useLoaderData();
    const { _id, countryPhoto, countryName, visaType, processingTime, requiredDocuments, description, fee, validity, ageRestriction, applicationMethod } = visa;

    return (
        <div>
            <div className="card bg-base-100 w-2/5 mx-auto shadow-xl my-10">
                <figure>
                    <img className='w-full h-60 object-cover'
                        src={countryPhoto}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-4xl py-4">{countryName}</h2>
                    <p><strong>Visa Type:</strong> {visaType}</p>
                    <p><strong>Processing Time:</strong> {processingTime} Days</p>
                    
                    <p><strong>Required Documents:</strong></p>
                    <ul className="list-disc list-inside ">
                        {requiredDocuments?.length ? (
                            requiredDocuments.map((doc, index) => (
                                <ol key={index} className="flex items-center">
                                    ⦾
                                    &nbsp; {doc}
                                </ol>
                            ))
                        ) : (
                            <li>N/A</li>
                        )}
                    </ul>

                    <p><strong>Application Method:</strong> {applicationMethod}</p>
                    <p><strong>Age Restriction:</strong> {ageRestriction}+</p>
                    <p><strong>Description:</strong> {description}</p>
                    <p><strong>Validity:</strong> {validity} Days</p>
                    <p><strong>Fee:</strong> ${fee} </p>
                    <div className="card-actions justify-center mt-5">
                        <button className='w-full btn btn-neutral'>Apply</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisaDetails;