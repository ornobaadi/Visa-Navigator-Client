import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyVisa = ({ visa, setVisas, visas }) => {



    const { _id, countryPhoto, countryName, visaType, processingTime, requiredDocuments, description, fee, validity, ageRestriction, applicationMethod } = visa;

    const handleDelete = _id => {
        console.log(_id);
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
                fetch(`http://localhost:5000/visa/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
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
                    <div className="card-actions justify-end">
                        <Link to={`updateVisa/${_id}`} className="btn btn-outline">Edit</Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-error text-white">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MyVisa;