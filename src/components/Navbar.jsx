import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/allvisa'>All Visa</NavLink></li>
            <li><NavLink to='/addvisa'>Add Visa</NavLink></li>
            <li><NavLink to='/my-added-visa'>My Added Visa</NavLink></li>
            <li><NavLink to='/my-visa-applications'>My Applications</NavLink></li>
        </>
    )

    return (
        <div className="navbar bg-base-100">
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
                <Link to='/' className="btn btn-ghost text-xl">VISA</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <div>
                    { user && user?.email ? 
                    <div className="flex items-center">
                        <img className="w-10 h-10 rounded-full" src={user?.photoURL} alt="" />
                        <p>{user.displayName}</p>
                    </div> 
                    : 
                    <div></div>}
                </div>
                {
                    user && user?.email ? 
                    <button onClick={logOut} className="btn">Logout</button>
                    :
                        <div>
                            <Link className="btn" to='/auth/login'>Login</Link>
                            <Link className="btn" to='/auth/register'>Signup</Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navbar;