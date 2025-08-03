import { Link, Links, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { businessInfo } from "../../assets/assets";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-[#4E1C0A] flex items-center justify-between p-2  font-medium     sm:shadow-[0_0_40px_-10px_#FFA726]">
      {/* LOGO*/}

      <Link to="/" className="logo  text-[#5ED4D4] flex items-center gap-2">
        <span>
          <img src={businessInfo.logo} className="h-13 w-13 rounded-full " />
        </span>
        <span>
          {" "}
          Puchka<span className="text-[#FFA726]">Paradise</span>
        </span>
      </Link>

      {/* Navbar */}
      <ul className="hidden sm:flex gap-5 text-5m text-[#FFE5B4]">
        <NavLink
          to="/"
          className="flex flex-col font-semibold items-center gap-1 hover:text-[#FFA726] transition duration-300 ease-in-out"
        >
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FDF6E3] hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col font-semibold items-center gap-1 hover:text-[#FFA726] transition duration-300 ease-in-out"
        >
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FDF6E3] hidden" />
        </NavLink>
        <NavLink
          to="/menu"
          className="flex flex-col font-semibold items-center gap-1 hover:text-[#FFA726] transition duration-300 ease-in-out"
        >
          <p>Menu</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FDF6E3] hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col font-semibold items-center gap-1 hover:text-[#FFA726] transition duration-300 ease-in-out"
        >
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-[#FDF6E3] hidden" />
        </NavLink>
      </ul>

      {/* Menu,Rate Us */}
      <div className="flex items-center gap-6">
        <Link
          to="/review"
          className="hidden sm:block bg-[#FFA726] hover:bg-  font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300 hover:scale-105"
        >
          Rate Us
        </Link>

        <div
          onClick={() => setVisible((prev) => !prev)}
          className="w-10 cursor-pointer sm:hidden text-[#FFE5B4]"
        >
          {!visible ? <Menu size={30} /> : <X size={30} />}
        </div>
      </div>

      {/* Sidebar menu for small screen */}
      <nav
        className={`sm:hidden absolute rounded-2xl   z-[9999] top-19 left-6 right-4 w-[90%]  bg-[#FFE5B4] text-[#4E1C0A]   border border-orange-200 shadow-[0_0_40px_-10px_rgba(255,115,0,0.4)]  text-center transition-all duration-500 ease-in-out overflow-hidden ${
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
              to="/menu"
              className="hover:text-[#18181b]"
              onClick={() => setVisible(false)}
            >
              Menu
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

          <li>
            <NavLink
              to="/review"
              className="hover:text-[#18181b]"
              onClick={() => setVisible(false)}
            >
              Rate Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
