import Swal from 'sweetalert2'

const AddVisa = () => {

    const handleAddVisa = e =>{
        e.preventDefault();

        const form = e.target;

        const countryPhoto = form.countryPhoto.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;
        const requiredDocuments = Array.from(
            form.requiredDocuments
        )
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        const description = form.description.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;
        const ageRestriction = form.ageRestriction.value;
        const newVisa = {countryPhoto, countryName, visaType,  processingTime, requiredDocuments, description, fee, validity, ageRestriction, applicationMethod }
        console.log(newVisa);

        // send data to server 
        fetch('https://visa-navigator-server-umber.vercel.app/visa',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newVisa)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Visa Application Created",
                    showConfirmButton: false,
                    timer: 1000
                });
            }
        })
    }

    return (
        <div className="bg-base-200 p-10 w-11/12 mx-auto">
            <h2 className="text-center text-3xl font-bold my-10">Add Visa Information</h2>
            <form onSubmit={handleAddVisa}>
                {/* Country Image and Name */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country Photo URL</span>
                        </label>
                        <input type="text" name="countryPhoto" placeholder="Country Photo URL" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input type="text" name="countryName" placeholder="Country Name" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* Visa Type and Processing Time */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Select Visa Type</span>
                        </label>
                        <select name="visaType" className="select select-bordered w-full">
                            <option disabled selected>Pick category</option>
                            <option>Tourist Visa</option>
                            <option>Student Visa</option>
                            <option>Official Visa</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time (Days)</span>
                        </label>
                        <input type="number" name="processingTime" placeholder="Processing Time" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* Required Documents */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Required Documents</span>
                    </label>
                    <div className="md:flex">
                        <label className="cursor-pointer flex items-center mb-2 mr-10">
                            <input type="checkbox" name="requiredDocuments" value="Valid passport" className="checkbox checkbox-neutral" />
                            <span className="ml-2">Valid passport</span>
                        </label>
                        <label className="cursor-pointer flex items-center mb-2 mr-10">
                            <input type="checkbox" name="requiredDocuments" value="Visa application form" className="checkbox checkbox-neutral" />
                            <span className="ml-2">Visa application form</span>
                        </label>
                        <label className="cursor-pointer flex items-center mr-10">
                            <input type="checkbox" name="requiredDocuments" value="Recent passport-sized photograph" className="checkbox checkbox-neutral" />
                            <span className="ml-2">Recent passport-sized photograph</span>
                        </label>
                    </div>
                </div>

                {/* Description and Age Restriction */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="Description" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Age Restriction</span>
                        </label>
                        <input type="number" name="ageRestriction" placeholder="Age Restriction" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* Fee and Validity */}
                <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Visa Fee</span>
                        </label>
                        <input type="number" name="fee" placeholder="Fee in USD" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Validity (in Days)</span>
                        </label>
                        <input type="number" name="validity" placeholder="Validity Duration" className="input input-bordered w-full" />
                    </div>
                </div>

                {/* Application Method */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Application Method</span>
                    </label>
                    <input type="text" name="applicationMethod" placeholder="Online or Offline" className="input input-bordered w-full" />
                </div>
                {/* Submit Button */}
                <input type="submit" value="Add Visa" className="btn btn-neutral w-full mt-4" />

            </form>
        </div>
    );
};

export default AddVisa;
