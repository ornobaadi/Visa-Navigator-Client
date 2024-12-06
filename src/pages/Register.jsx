import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const [error, setError] = useState({})
    const handleSubmit  = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        // if (name.length < 5) {
        //     setError({ ...error, name: 'name must be more than 5 character long' });
        //     return;
        // }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        // if (password.length < 6 || 
        //     !/[A-Z]/.test(password) || 
        //     !/[a-z]/.test(password)) {
        //     setError({ 
        //         ...error, 
        //         name: 'Password must be at least 6 characters long and include both uppercase and lowercase letters.' 
        //     });
        //     return;
        // }
        console.log({ name, photo, email, password });

        createNewUser(email, password)
                .then(result => {
                    const user = result.user;
                    setUser(user);
                    console.log(user);
                    // updateUserProfile({ displayName: name, photoURL: photo })
                    //     .then(() => {
                    //         Navigate('/');
                    //     })
                    //     .catch(err => {
                    //         console.log(err);
                    //     })
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                });
    };


        //     
        // }

        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-10 ">
                    <h2 className="text-2xl font-semibold text-center ">Register your account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {/* {
                    error.name &&
                    <label className="label text-xs text-red-600">
                        {error.name}
                    </label>
                } */}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Sign Up</button>
                        </div>
                    </form>
                    <h2 className="text-center "> Already have an Account? <Link className="font-semibold link-hover" to='/auth/login'>Login</Link> </h2>
                </div>
            </div>
        );
    };

export default Register;