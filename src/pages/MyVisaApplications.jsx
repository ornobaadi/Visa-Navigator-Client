import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const MyVisaApplications = () => {
    const [applications, setApplications] = useState([]);
    const [filteredApplications, setFilteredApplications] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchApplications = async () => {
            if (user && user.email) {
                try {
                    const response = await fetch(`https://visa-navigator-server-umber.vercel.app/applications?email=${user.email}`);
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    const data = await response.json();
                    setApplications(data);
                    setFilteredApplications(data);
                } catch (error) {
                    console.error('Error fetching applications:', error);
                }
            }
        };
        fetchApplications();
    }, [user]);

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
                const updatedApplications = applications.filter(app => app._id !== applicationId);
                setApplications(updatedApplications);
                setFilteredApplications(updatedApplications);
                Swal.fire("Canceled!", "Your application has been canceled.", "success");
            } else {
                Swal.fire("Error!", "There was a problem canceling the application.", "error");
            }
        }
    };

    const handleSearch = () => {
        const filtered = applications.filter(app => 
            app.countryName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredApplications(filtered);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-3xl font-bold my-4">My Visa Applications</h2>
            
            {/* Search Bar */}
            <div className="flex mb-4">
                <input 
                    type="text" 
                    placeholder="Search by Country Name" 
                    className="input input-bordered w-full max-w-xs mr-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button 
                    className="btn btn-primary"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            {filteredApplications.length === 0 ? (
                <p>No applications found.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredApplications.map((app) => (
                        <div key={app._id} className="card bg-base-100 shadow-xl p-4">
                            <h3 className="font-bold text-xl mb-2">{app.countryName} Visa</h3>
                            <img 
                                src={app.countryPhoto} 
                                alt={app.countryName} 
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <div className="space-y-2">
                                <p><strong>Name:</strong> {app.firstName} {app.lastName}</p>
                                <p><strong>Email:</strong> {app.email}</p>
                                <p><strong>Applied Date:</strong> {app.appliedDate}</p>
                                <p><strong>Visa Fee:</strong> ${app.fee}</p>
                                <p><strong>Visa Type:</strong> {app.visaType}</p>
                                <p><strong>Application Method:</strong> {app.applicationMethod}Online</p>
                            </div>
                            <div className="card-actions justify-end mt-4">
                                <button
                                    className="btn btn-error text-white"
                                    onClick={() => handleCancelApplication(app._id)}
                                >
                                    Cancel Application
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