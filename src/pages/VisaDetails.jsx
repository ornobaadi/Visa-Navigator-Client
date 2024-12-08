import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const VisaDetails = () => {
    const visa = useLoaderData();
    const { _id, countryPhoto, countryName, visaType, processingTime, requiredDocuments, description, fee, validity, ageRestriction, applicationMethod } = visa;

    const [userEmail, setUserEmail] = useState(""); // Initialize with an empty string

    const handleApply = async (e) => {
        e.preventDefault();
        const form = e.target;

        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const appliedDate = new Date().toISOString().split('T')[0];

        const newApplication = {
            email: userEmail,
            firstName,
            lastName,
            appliedDate,
            fee,
            visaId: _id,
            countryName, // Include country name
            visaType, // Include visa type
            countryPhoto // Include country image
        };

        // Send application data to the server
        const response = await fetch('https://visa-navigator-server-umber.vercel.app/applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newApplication),
        });

        const data = await response.json();
        if (data.insertedId) {
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Application Submitted',
                showConfirmButton: false,
                timer: 1000,
            });
            // Close the modal after submission
            document.getElementById('my_modal_5').close();
        }
    };

    return (
        <div>
            <div className="card bg-base-100 w-2/5 mx-auto shadow-xl my-10">
                <figure>
                    <img className='w-full h-60 object-cover' src={countryPhoto} alt={countryName} />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-4xl py-4">{countryName}</h2>
                    <p><strong>Visa Type:</strong> {visaType}</p>
                    <p><strong>Processing Time:</strong> {processingTime} Days</p>
                    
                    <p><strong>Required Documents:</strong></p>
                    <ul className="list-disc list-inside ">
                        {requiredDocuments?.length ? (
                            requiredDocuments.map((doc, index) => (
                                <li key={index} className="flex items-center">
                                    ⦾ &nbsp; {doc}
                                </li>
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
                        <button className='w-full btn btn-neutral' onClick={() => document.getElementById('my_modal_5').showModal()}>Apply</button>
                    </div>
                </div>
            </div>

            {/* DaisyUI Modal */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Apply for Visa</h3>
                    <form onSubmit={handleApply} className="flex flex-col">
                        <input 
                            type="email" 
                            value={userEmail} 
                            onChange={(e) => setUserEmail(e.target.value)} // Allow user to input their email
                            placeholder="Enter your email" 
                            className="input input-bordered mb-4" 
                            required 
                        />
                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered mb-4" required />
                        <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered mb-4" required />
                        <p className="mb-2"><strong>Applied Date:</strong> {new Date().toLocaleDateString()}</p>
                        <p className="mb-4"><strong>Visa Fee:</strong> ${fee}</p>
                        <div className="modal-action">
                            <button type="submit" className="btn btn-accent">Apply</button>
                            <form method="dialog">
                                <button className="btn btn-error">Close</button>
                            </form>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default VisaDetails;