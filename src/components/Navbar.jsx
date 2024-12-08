import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allvisa'>All Visa</NavLink></li>
            {user?.email && (
                <>
                    <li><NavLink to='/addvisa'>Add Visa</NavLink></li>
                    <li><NavLink to='/my-added-visa'>My Added Visa</NavLink></li>
                    <li><NavLink to='/my-visa-applications'>My Applications</NavLink></li>
                </>
            )}
        </>
    )

    return (
        <div className="navbar bg-base-100/60 mx-auto sticky top-0 z-50 backdrop-blur-2xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                
                <Link to='/' className="btn btn-ghost text-xl">
                <img className="w-10 hidden md:inline" src="/favicon.png" alt="" />
                EZ VISA
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <ThemeToggle />
                {user && user?.email ? (
                    <div className="flex items-center gap-4">
                        <div className="dropdown dropdown-hover dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="User avatar"
                                        src={user?.photoURL || "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png"}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png";
                                        }}
                                    />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                                <li className="text-center font-bold">{user.displayName || 'User'}</li>
                                <li className="text-center text-sm text-gray-500">{user.email}</li>
                            </ul>
                        </div>
                        <button onClick={logOut} className="btn btn-neutral">Logout</button>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <Link className="btn btn-outline" to='/auth/login'>Login</Link>
                        <Link className="btn btn-outline" to='/auth/register'>Signup</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;