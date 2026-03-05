import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXTwitter,
    faLinkedinIn,
    faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 pt-20 pb-10">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-wrap flex-col lg:flex-row justify-evenly gap-12">
                    {/* Logo + Description */}
                    <div className="flex-1 max-w-full lg:max-w-sm">
                        <h2 className="text-2xl font-extrabold text-white mb-4">
                            CS — Ticket System
                        </h2>
                        <p className="text-gray-400 leading-6 text-sm">
                            Our ticket management system helps you handle
                            customer support requests efficiently and
                            professionally. Create, track, and resolve tickets
                            in real time to ensure smooth communication and
                            faster issue resolution.
                        </p>
                    </div>

                    {/* Navigation Columns Container */}
                    <div className="flex flex-wrap gap-12 md:gap-16 lg:gap-20">
                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-5">
                                Company
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Our Mission
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Contact Saled
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-semibold mb-5">
                                Services
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Products & Services
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Customer Stories
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Download Apps
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Information */}
                        <div>
                            <h3 className="text-white font-semibold mb-5">
                                Information
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Terms & Conditions
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-white transition whitespace-nowrap"
                                    >
                                        Join Us
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Links */}
                        <div className="min-w-max">
                            <h3 className="text-white font-semibold mb-5">
                                Social Links
                            </h3>
                            <ul className="space-y-4 text-sm">
                                <li className="flex items-center gap-3 hover:text-white transition whitespace-nowrap">
                                    <span className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded-full">
                                        <FontAwesomeIcon
                                            icon={faXTwitter}
                                            className="text-[10px]"
                                        />
                                    </span>
                                    <a href="#">@CS — Ticket System</a>
                                </li>
                                <li className="flex items-center gap-3 hover:text-white transition whitespace-nowrap">
                                    <span className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded-full">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                            className="text-[10px]"
                                        />
                                    </span>
                                    <a href="#">@CS — Ticket System</a>
                                </li>
                                <li className="flex items-center gap-3 hover:text-white transition whitespace-nowrap">
                                    <span className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded-full">
                                        <FontAwesomeIcon
                                            icon={faFacebookF}
                                            className="text-[10px]"
                                        />
                                    </span>
                                    <a href="#">@CS — Ticket System</a>
                                </li>
                                <li className="flex items-center gap-3 hover:text-white transition whitespace-nowrap">
                                    <span className="flex items-center justify-center w-5 h-5 border border-gray-400 rounded-full">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            className="text-sm"
                                        />
                                    </span>
                                    <a href="#">support@cst.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-gray-800 mt-16 pt-6 text-center text-white">
                    <p>&copy; 2026 CS — Ticket System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
