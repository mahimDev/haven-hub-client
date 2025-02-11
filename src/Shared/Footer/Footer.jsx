import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-darkGray text-white py-10 mt-20">
            <div className="max-w-[1440px] mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">About Us</h3>
                        <p className="text-sm">
                            Experience luxurious stays with our handpicked rooms and suites.
                            Your comfort and satisfaction are our priority.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to={"/"}>
                                    <p className="hover:text-gray-400">Home</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/rooms"}>
                                    <p className="hover:text-gray-400">Rooms</p>
                                </Link>
                            </li>
                            <li>
                                <Link to={"/about"}>
                                    <p className="hover:text-gray-400">About Us</p>
                                </Link>

                            </li>

                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="text-sm space-y-2">
                            <li>
                                <span className="font-semibold">Address:</span> 7830 Faridpur, Dhaka, Bangladesh
                            </li>
                            <li>
                                <span className="font-semibold">Phone:</span>{" "}
                                <a href="tel:+880123456789" className="hover:text-gray-400">+8801749746072</a>
                            </li>
                            <li>
                                <span className="font-semibold">Email:</span>{" "}
                                <a href="mailto:md286667@gmail.com" className="hover:text-gray-400">md286667@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-3">
                            <Link to="https://facebook.com/mahim717273">
                                <img className="w-8" src="https://img.icons8.com/?size=100&id=118467&format=png&color=8E8E8E" />
                            </Link>
                            <Link to="https://github.com/mahimDev">
                                <img className="w-8" src="https://img.icons8.com/?size=100&id=12599&format=png&color=8E8E8E" />
                            </Link>
                            <Link to="https://www.linkedin.com/in/mahimdev/">
                                <img className="w-8" src="https://img.icons8.com/?size=100&id=60444&format=png&color=8E8E8E" />
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center text-sm border-t border-gray-700 pt-4">
                    <p>&copy; {new Date().getFullYear()} Mahim All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;