import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Register = () => {


    const { createNewUser, setUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState({})
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const name = form.get('name');
        if (name.length < 5) {
            setError({ ...error, name: 'name must be more than 5 character long' });
            return;
        }
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        if (password.length < 6 ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password)) {
            setError({
                ...error,
                name: 'Password must be at least 6 characters long and include both uppercase and lowercase letters.'
            });
            return;
        }
        console.log({ name, photo, email, password });

        createNewUser(email, password)
            .then(result => {
                console.log('User created at firebase', result.user);
                const user = result.user;
                const newUser = { name, email, photo }

                // Save new user info to the database
                fetch('https://visa-navigator-server-umber.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if(data.insertedId){
                            console.log('user created in db');
                            Swal.fire({
                                position: "top-center",
                                icon: "success",
                                title: "Registration Successful!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    });

                setUser(user);
                // console.log(user);
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => {
                        console.log(err);
                    })
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/email-already-in-use") {
                    setError({ email: "This email is already in use. Please use another one." });
                } else {
                    setError({ general: errorMessage });
                }
            });
    };
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                const newUser = {
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL,
                };
    
                // Check or add user in the database
                fetch('https://visa-navigator-server-umber.vercel.app/users', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newUser),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.message === 'User already exists') {
                            console.log('User already exists:', data.user);
                        } else {
                            console.log('New user created:', data.user);
                        }
                        setUser(user); // Save user to context
                        navigate(location?.state?.from || '/', { replace: true });
                    })
                    .catch((err) => console.error('Error:', err));
            })
            .catch((error) => {
                setError({ google: error.message });
            });
    };
    
    
    

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
                    {
                        error.name &&
                        <label className="label text-xs text-red-600">
                            {error.name}
                        </label>
                    }
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Sign Up</button>
                    </div>
                    <h2 className="text-center py-5 "> Already have an Account? {" "} <Link className="font-semibold link-hover" to='/auth/login'>Login</Link> </h2>
                    <div>
                        <h2 className="text-center font-medium">Or</h2>
                    </div>
                    {error.google && (
                        <label className="label text-red-600 text-sm">{error.google}</label>
                    )}
                </form>
                <button onClick={handleGoogleSignIn} className="btn btn-wide md:w-[368px] mx-auto">
                    <FaGoogle /> Sign Up with Google
                </button>
            </div>
        </div>
    );
};

export default Register;