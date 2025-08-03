import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ReviewUs from "./pages/ReviewUs.jsx";
import Menu from "./pages/Menu.jsx";
import Navbar from "./pages/subComponents/Navbar.jsx";
import Footer from "./pages/subComponents/Footer.jsx";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <Router>
        <div className=" ">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/review" element={<ReviewUs />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
          </Routes>
          <ToastContainer position="top-right" theme="dark" autoClose="3000" />
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
