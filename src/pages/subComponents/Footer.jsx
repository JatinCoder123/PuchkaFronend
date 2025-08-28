import { Facebook, Instagram, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { businessInfo } from "../../assets/assets";
import { toast } from "react-toastify";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
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
        className={`bg-[#4E1C0A] mt-24 pt-12 border-t border-gray-200 transition-opacity duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transform`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-[#FFF8EC]">
          {/* Logo + About */}
          <div>
            <h2 className="text-3xl font-bold text-[#FFA726]">
              <span className="text-[#5ED4D4]">Puchka</span>Paradise
            </h2>
            <p className="mt-3 text-sm leading-relaxed">
              Your one-stop street food corner for the most irresistible
              Golgappe experience. Crunchy, spicy, and full of flavor!
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-[#FDF6E3] mb-4">Company</h3>
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
                <Link to="/menu" className="hover:text-orange-500 transition">
                  Menu
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
                <Link to="/review" className="hover:text-orange-500 transition">
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-[#FDF6E3] mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="block">📞 {businessInfo.phone}</span>
              </li>
              <li>
                <a
                  className="block"
                  href={`mailto:${businessInfo.email}`}
                  onClick={() =>
                    toast.info(
                      `If your email app doesn't open, manually mail us!`
                    )
                  }
                >
                  ✉️ {businessInfo.email}
                </a>
              </li>
              <li>
                <span className="block ">📍 {businessInfo.location}</span>
              </li>
              <li className="mt-4 flex items-center gap-3">
                {businessInfo.facebookUrl && (
                  <a
                    href={businessInfo.facebookUrl}
                    className="hover:text-orange-500 transition"
                    target="_blank"
                  >
                    <Facebook />
                  </a>
                )}

                <a
                  href={businessInfo.instagramUrl}
                  className="hover:text-orange-500 transition"
                  target="_blank"
                >
                  <Instagram />
                </a>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="hover:text-orange-500 transition"
                  onClick={() =>
                    toast.info(
                      `If your email app doesn't open, use: ${businessInfo.email}`
                    )
                  }
                  title="If this doesn't work, email us manually at hello@puchkaparadise.in"
                >
                  <Mail />
                </a>
                <a
                  href={`https://wa.me/${businessInfo.phone.replace(
                    /[^0-9]/g,
                    ""
                  )}?text=${encodeURIComponent(
                    "Hello! I have a question about your services."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-orange-500 transition"
                  title="If this doesn't work, email us manually at hello@puchkaparadise.in"
                >
                  <FaWhatsapp size={26} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Bar */}
        <div className="border-t mt-12 border-gray-200 py-6 text-center text-sm text-[#FFE5B4]">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Puchka Paradise | Licensed & Registered with FSSAI under FSS Act, 2006 – Reg. No. 22725699000241</span> 
        </div>
      </footer>
    </>
  );
}
