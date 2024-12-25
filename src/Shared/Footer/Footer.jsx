const Footer = () => {
    return (
        <footer className="bg-darkGray text-white py-10 mt-20">
            <div className="container mx-auto px-4">
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
                                <a href="/home" className="hover:text-gray-400">Home</a>
                            </li>
                            <li>
                                <a href="/rooms" className="hover:text-gray-400">Rooms</a>
                            </li>
                            <li>
                                <a href="/about" className="hover:text-gray-400">About Us</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-gray-400">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="text-sm space-y-2">
                            <li>
                                <span className="font-semibold">Address:</span> 123 Main Street, Dhaka, Bangladesh
                            </li>
                            <li>
                                <span className="font-semibold">Phone:</span>{" "}
                                <a href="tel:+880123456789" className="hover:text-gray-400">+880123456789</a>
                            </li>
                            <li>
                                <span className="font-semibold">Email:</span>{" "}
                                <a href="mailto:info@hotel.com" className="hover:text-gray-400">info@hotel.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <i className="fab fa-facebook-f hover:text-gray-400"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                                <i className="fab fa-twitter hover:text-gray-400"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <i className="fab fa-instagram hover:text-gray-400"></i>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                                <i className="fab fa-linkedin-in hover:text-gray-400"></i>
                            </a>
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