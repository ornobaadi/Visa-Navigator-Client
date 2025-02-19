import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-300 text-lg rounded p-5">
            <img className="w-32" src="/favicon.png" alt="" />
            <p className="font-semibold text-xl">
                    EZ Visa Pvt Ltd.
                    <br />
                    Providing reliable services since 2012
                </p>
            <div className="flex justify-center gap-5 text-2xl md:text-3xl mt-5">
                <Link to="https://www.facebook.com/">
                    <FaFacebook className="hover:text-blue-700" />
                </Link>
                <Link to="https://www.instagram.com/">
                    <FaInstagram className="hover:text-pink-500" />
                </Link>
                <Link to="https://www.github.com/">
                    <FaGithub className="hover:text-slate-600" />
                </Link>
            </div>
            <aside className="text-sm mt-5">
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved by{" "}
                    <Link
                        to="https://github.com/ornobaadi"
                        className="text-emerald-600 font-normal hover:font-semibold"
                    >
                        Ornob Aadi
                    </Link>
                </p>
            </aside>
        </footer>
    );
};

export default Footer;