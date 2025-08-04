import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ReviewUs from "./pages/ReviewUs.jsx";
import Menu from "./pages/Menu.jsx";
import Navbar from "./pages/subComponents/Navbar.jsx";
import Footer from "./pages/subComponents/Footer.jsx";
import { ToastContainer } from "react-toastify";
import ChangeShopStatus from "./pages/ChangeShopStatus.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [status, setStatus] = useState("open");
  useEffect(() => {
    async function fetchStatus() {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/shop`
        );
        setStatus(data.status);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStatus();
  }, []);
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage status={status} />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/review" element={<ReviewUs />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/shop" element={<ChangeShopStatus />}></Route>
          </Routes>
          <ToastContainer position="top-right" theme="dark" autoClose="3000" />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
