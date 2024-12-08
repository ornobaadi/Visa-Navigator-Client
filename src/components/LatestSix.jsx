import { useEffect, useState } from 'react';
import HomeCard from './HomeCard';
import { Link } from 'react-router-dom';

const LatestSix = () => {
    const [latestSix, setLatestSix] = useState([]);

    useEffect(() => {
        // Fetch the six most recent visa entries from the backend
        fetch("http://localhost:5000/latestSix")
            .then((res) => res.json())
            .then((data) => {
                setLatestSix(data);
            })
            .catch((error) => console.error("Error fetching latest visas:", error));
    }, []);

    return (
        <div>
            <h1 className="text-center text-4xl mb-6 mt-20 font-bold bg-gradient-to-r from-yellow-900 via-yellow-400 to-yellow-900 bg-clip-text text-transparent">
                New Visas
            </h1>

            <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {latestSix.map((visa) => (
                    <HomeCard key={visa._id} visa={visa}></HomeCard>
                ))}
            </div>
            <div className='flex justify-center my-10'>
                <Link to='/allvisa' className="btn btn-wide bg-emerald-400">See All Data</Link>
            </div>
        </div>
    );
};
export default LatestSix;