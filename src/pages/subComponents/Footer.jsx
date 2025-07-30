import { Facebook, Instagram, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Footer Section */}
      <footer
        className={`bg-white mt-24 pt-12 border-t border-gray-200 transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transform`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
          {/* Logo + About */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-orange-500">Puchka</span>Paradise
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Your one-stop street food corner for the most irresistible
              Golgappe experience. Crunchy, spicy, and full of flavor!
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-orange-500 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/review"
                  className="hover:text-orange-500 transition"
                >
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block">📞 +91 7466079671</span>
              </li>
              <li>
                <span className="block">✉️ puchkaparadise@gmail.com</span>
              </li>
              <li>
                <span className="block">📍 New Delhi, India</span>
              </li>
              <li className="mt-4 flex items-center gap-3">
                <a href="#" className="hover:text-orange-500 transition">
                  <Facebook />
                </a>
                <a href="#" className="hover:text-orange-500 transition">
                  <Instagram />
                </a>
                <a href="#" className="hover:text-orange-500 transition">
                  <Mail />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t mt-12 border-gray-200 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Puchka Paradise</span> — All Rights
          Reserved.
        </div>
      </footer>
    </>
  );
}
