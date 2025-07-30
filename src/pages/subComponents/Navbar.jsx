import { Link, Links, NavLink } from "react-router-dom";
import { ArrowLeft, MenuSquare, Star } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-[#fc7f09] sm:bg-white flex items-center justify-between p-3  font-medium  rounded-full  mt-3 sm:shadow-[0_0_40px_-10px_#fc7f09]">
      {/* LOGO*/}

      <Link to="/" className="logo text-[#ffffff] sm:text-[#fc7f09]">
        Puchka<span className="text-[#18181b]">Paradise</span>
      </Link>

      {/* Navbar */}
      <ul className="hidden sm:flex gap-5 text-5m text-[#18181b]">
        <NavLink
          to="/"
          className="flex flex-col font-semibold items-center gap-1 hover:text-[#fc7f09] transition duration-300 ease-in-out"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col font-semibold items-center gap-1 hover:text-[#fc7f09] transition duration-300 ease-in-out"
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col font-semibold items-center gap-1 hover:text-[#fc7f09] transition duration-300 ease-in-out"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Menu,Rate Us */}
      <div className="flex items-center gap-6">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-105">
          <Link to="/review">Rate Us</Link>
        </button>

        <div
          onClick={() => setVisible((prev) => !prev)}
          className="w-10 cursor-pointer sm:hidden "
        >
          {visible ? (
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/FFFFFF/multiply.png"
              alt="multiply"
            />
          ) : (
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/external-febrian-hidayat-basic-outline-febrian-hidayat/24/FFFFFF/external-menu-bar-ui-essential-febrian-hidayat-basic-outline-febrian-hidayat.png"
              alt="menu-btn"
            />
          )}
        </div>
      </div>

      {/* Sidebar menu for small screen */}
      <nav
        className={`sm:hidden absolute rounded-2xl   z-[9999] top-19 left-7 right-4 w-[90%]  bg-orange-50 text-[#db6e09]   border border-orange-200 shadow-[0_0_40px_-10px_rgba(255,115,0,0.4)]  text-center transition-all duration-500 ease-in-out overflow-hidden ${
          visible ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 py-4">
          <li>
            <NavLink
              to="/"
              className="hover:text-[#18181b]"
              onClick={() => setVisible(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:text-[#18181b]"
              onClick={() => setVisible(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-[#18181b]"
              onClick={() => setVisible(false)}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
