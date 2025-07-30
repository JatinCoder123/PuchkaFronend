import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ReviewUs from "./pages/ReviewUs.jsx";
import Navbar from "./pages/subComponents/Navbar.jsx";
import Footer from "./pages/subComponents/Footer.jsx";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getAllMedias } from "./store/slices/mediaSlice.js";
import { getAllReviews } from "./store/slices/reviewsSlice.js";
import { getBusinessProfile } from "./store/slices/businessProfile.js";
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getBusinessProfile());
    // dispatch(getAllMedias());
    // dispatch(getAllReviews());
  }, [dispatch]);
  return (
    <>
      <Router>
        <div className="px-2 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/review" element={<ReviewUs />}></Route>
          </Routes>
          <ToastContainer
            position="top-right"
            theme="colored"
            autoClose="3000"
          />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
