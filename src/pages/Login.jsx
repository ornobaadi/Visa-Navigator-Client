import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {

    // const provider = new GoogleAuthProvider();
    const { userLogin, setUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState({});
    const location = useLocation();
    console.log(location);
    const navigate = useNavigate();
    // const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        setError({}); // Clear previous errors
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);
                navigate(location?.state?.from?.pathname || "/");
            })
            .catch((err) => {
                setError({ login: err.code });
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
                <h2 className="text-2xl font-semibold text-center">Login to your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            // ref={emailRef}
                            placeholder="email"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            className="input input-bordered"
                            required
                        />
                        {error.login && (
                            <label className="label text-red-600 text-sm">{error.login}</label>
                        )}
                        <label className="label">
                            <span className="label-text-alt link link-hover">Forgot password?</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                    <h2 className="text-center py-5">
                        Don&#39;t have an Account?{" "}
                        <Link className="font-semibold link-hover" to="/auth/register">
                            Sign Up
                        </Link>
                    </h2>
                    <div>
                        <h2 className="text-center font-medium">Or</h2>
                    </div>
                    {error.google && (
                        <label className="label text-red-600 text-sm">{error.google}</label>
                    )}
                </form>
                <button onClick={handleGoogleSignIn} className="btn btn-wide md:w-[368px] mx-auto">
                    <FaGoogle /> Login with Google
                </button>
            </div>
        </div>
    );
};


export default Login;