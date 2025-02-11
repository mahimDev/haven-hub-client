import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-toastify";

const Contact = () => {
    const { toggle } = useAuth()
    return (
        <div className={`max-w-5xl mx-auto p-6 ${toggle ? "bg-darkGray text-lightGray" : "bg-lightGray text-darkGray"} shadow-lg rounded `}>
            <h2 className="text-3xl font-bold text-center  mb-6">
                Contact Us
            </h2>
            <p className=" text-center mb-8">
                Have questions or need assistance? <br /> Our team at{" "}
                <strong>HavenHub</strong> is here to help! Reach out to us using the
                details below.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Side - Contact Info */}
                <div className="space-y-6 0">
                    <div>
                        <h3 className="text-xl font-semibold">📧 Email</h3>
                        <p>Support: <strong>havenhub@gmail.com</strong></p>
                        <p>Partnerships: <strong>partners@havenhub.com</strong></p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">📞 Phone</h3>
                        <p>Customer Support: <strong>+8801749746072</strong></p>
                        <p>Business Inquiries: <strong>+8801726668082</strong></p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">📍 Address</h3>
                        <p>7830 Bhanga, Faridpur</p>
                        <p>Dhaka, Bangladesh</p>

                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">🕒 Working Hours</h3>
                        <p>Monday - Friday: <strong>9:00 AM - 6:00 PM</strong></p>
                        <p>Saturday - Sunday: <strong>10:00 AM - 4:00 PM</strong></p>
                    </div>
                </div>

                {/* Right Side - Contact Form & Social Links */}
                <div>
                    {/* Social Media */}
                    <div className="mb-6 text-center">
                        <h3 className="text-xl font-semibold mb-2">📲 Follow Us</h3>
                        <div className="flex justify-center space-x-4">
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

                    {/* Contact Form */}
                    <div className=" p-6 rounded border shadow-md">
                        <h3 className="text-xl font-semibold  mb-4">
                            📩 Contact Form
                        </h3>
                        <form className="space-y-4 text-gray-800 ">
                            <div>
                                <label className="block text-gray-400 font-medium">Full Name:</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 font-medium">Email Address:</label>
                                <input
                                    type="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-400 font-medium">Message:</label>
                                <textarea
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    required
                                ></textarea>
                            </div>

                            <button
                                onClick={() => toast.success("Send Message Success")}
                                type="submit"
                                className={`w-full ${toggle ? "bg-lightGray text-darkGray" : "bg-darkGray text-lightGray"}  py-3 px-4 rounded-lg hover:scale-105 transition duration-300`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
