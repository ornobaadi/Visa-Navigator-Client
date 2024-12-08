/* eslint-disable react/prop-types */
import { useState } from 'react';
import Swal from "sweetalert2";

// Updated MyVisa Component
const MyVisa = ({ visa, setVisas, visas }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { _id, countryPhoto, countryName, visaType, processingTime, requiredDocuments, description, fee, validity, ageRestriction, applicationMethod } = visa;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://visa-navigator-server-umber.vercel.app/visa/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "The Visa has been deleted.",
                                icon: "success"
                            });
                            const remaining = visas.filter(vis => vis._id !== _id);
                            setVisas(remaining);
                        }
                    })
            }
        });
    }

    const handleUpdateVisa = (e) => {
        e.preventDefault();

        const form = e.target;

        const updatedVisa = {
            countryPhoto: form.countryPhoto.value,
            countryName: form.countryName.value,
            visaType: form.visaType.value,
            processingTime: form.processingTime.value,
            requiredDocuments: Array.from(
                form.requiredDocuments
            )
                .filter((checkbox) => checkbox.checked)
                .map((checkbox) => checkbox.value),
            description: form.description.value,
            fee: form.fee.value,
            validity: form.validity.value,
            applicationMethod: form.applicationMethod.value,
            ageRestriction: form.ageRestriction.value
        };

        // send data to server 
        fetch(`https://visa-navigator-server-umber.vercel.app/visa/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedVisa)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // Update the local state with the new visa information
                    setVisas(prevVisas =>
                        prevVisas.map(vis =>
                            vis._id === _id ? { ...vis, ...updatedVisa } : vis
                        )
                    );

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Visa Updated Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    setIsModalOpen(false);
                }
            })
            .catch(error => {
                console.error('Error updating visa:', error);
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: "Failed to Update Visa",
                    showConfirmButton: true
                });
            });
    }

    return (
        <div>
            <div className="card bg-base-100 w-full md:w-80 lg:w-96 shadow-xl">
                <figure>
                    <img
                        className="h-48 md:h-60 w-full object-cover"
                        src={countryPhoto}
                        alt={`${countryName} visa`}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="font-bold text-lg md:text-xl lg:text-2xl py-2">
                        {countryName}
                    </h2>
                    <p><span className="font-bold">Visa Type:</span> {visaType}</p>
                    <p><span className="font-bold">Processing Time:</span> {processingTime} Days</p>
                    <p><span className="font-bold">Age Restriction:</span> {ageRestriction}+</p>
                    <p><span className="font-bold">Fee:</span> ${fee}</p>
                    <div className="card-actions justify-end mt-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn btn-outline btn-sm md:btn-md"
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error btn-sm md:btn-md text-white"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto">
                        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-6">
                            Update Visa Information: {countryName}
                        </h2>
                        <form onSubmit={handleUpdateVisa}>
                            {/* Country Image and Name */}
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country Photo URL</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="countryPhoto"
                                        defaultValue={countryPhoto}
                                        placeholder="Country Photo URL"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="countryName"
                                        defaultValue={countryName}
                                        placeholder="Country Name"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* Visa Type and Processing Time */}
                            <div className="grid gap-4 md:grid-cols-2 mt-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select Visa Type</span>
                                    </label>
                                    <select
                                        name="visaType"
                                        defaultValue={visaType}
                                        className="select select-bordered w-full"
                                    >
                                        <option disabled>Pick category</option>
                                        <option>Tourist Visa</option>
                                        <option>Student Visa</option>
                                        <option>Official Visa</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Processing Time (Days)</span>
                                    </label>
                                    <input
                                        type="number"
                                        defaultValue={processingTime}
                                        name="processingTime"
                                        placeholder="Processing Time"
                                        className="input input-bordered w-full"
                                    />
                                </div>
                            </div>

                            {/* Required Documents */}
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text">Required Documents</span>
                                </label>
                                <div className="flex flex-wrap gap-4">
                                    <label className="cursor-pointer flex items-center">
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value="Valid passport"
                                            defaultChecked={requiredDocuments.includes('Valid passport')}
                                            className="checkbox checkbox-neutral"
                                        />
                                        <span className="ml-2">Valid passport</span>
                                    </label>
                                    <label className="cursor-pointer flex items-center">
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value="Visa application form"
                                            defaultChecked={requiredDocuments.includes('Visa application form')}
                                            className="checkbox checkbox-neutral"
                                        />
                                        <span className="ml-2">Visa application form</span>
                                    </label>
                                    <label className="cursor-pointer flex items-center">
                                        <input
                                            type="checkbox"
                                            name="requiredDocuments"
                                            value="Recent passport-sized photograph"
                                            defaultChecked={requiredDocuments.includes('Recent passport-sized photograph')}
                                            className="checkbox checkbox-neutral"
                                        />
                                        <span className="ml-2">Recent passport-sized photograph</span>
                                    </label>
                                </div>
                            </div>

                            {/* Other fields */}
                            {/* Similar adjustments with responsive classes for the remaining form fields */}

                            {/* Button Group */}
                            <div className="flex justify-end gap-4 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="btn btn-ghost"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-neutral"
                                >
                                    Update Visa
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>

    );
};

export default MyVisa;
