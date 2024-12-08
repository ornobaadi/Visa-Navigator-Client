import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const MyVisaApplications = () => {
    const [applications, setApplications] = useState([]);
    const userEmail = "aadi4789@gmail.com"; // Use a valid email for testing

    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch(`https://visa-navigator-server-umber.vercel.app/applications?email=${userEmail}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log('Fetched applications:', data); // Log the fetched data
                setApplications(data); // Set the applications state
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };
        fetchApplications();
    }, [userEmail]);

    const handleCancelApplication = async (applicationId) => {
        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        });

        if (result.isConfirmed) {
            const response = await fetch(`https://visa-navigator-server-umber.vercel.app/applications/${applicationId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            if (data.deletedCount > 0) {
                setApplications(applications.filter(app => app._id !== applicationId));
                Swal.fire("Canceled!", "Your application has been canceled.", "success");
            } else {
                Swal.fire("Error!", "There was a problem canceling the application.", "error");
            }
        }
    };

    return (
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold my-4">My Visa Applications</h2>
            {applications.length === 0 ? (
                <p>No applications found.</p>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {applications.map((app) => (
                        <div key={app._id} className="card bg-base-100 shadow-xl p-4">
                            <h3 className="font-bold">{app.firstName} {app.lastName}</h3>
                            <p><strong>Email:</strong> {app.email}</p>
                            <p><strong>Applied Date:</strong> {app.appliedDate}</p>
                            <p><strong>Visa Fee:</strong> ${app.fee}</p>
                            <p><strong>Country:</strong> {app.countryName}</p>
                            <p><strong>Visa Type:</strong> {app.visaType}</p> 
                            <img src={app.countryPhoto} alt={app.countryName} className="w-16 h-16 object-cover" />
                            <div className="flex justify-end mt-2">
                                <button 
                                    className="btn btn-error text-white" 
                                    onClick={() => handleCancelApplication(app._id)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyVisaApplications;