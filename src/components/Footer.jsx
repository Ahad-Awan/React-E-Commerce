import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">E-Commerce</h2>
          <p className="text-sm text-gray-400">
            Your one-stop shop for the latest trends in fashion, electronics,
            and lifestyle. Shop smart. Shop easy.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/adminDashboard" className="hover:text-blue-600">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Customer Service
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-blue-600">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-600">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-blue-600">
                Help & Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info + Social Icons */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" />
              Lahore, Pakistan
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-600" />
              support@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-600" />
              +92 312 3456789
            </li>
          </ul>

          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} E-Commerce. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
