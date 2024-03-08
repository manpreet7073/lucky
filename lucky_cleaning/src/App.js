
import {Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/AboutPage";
// import Pricing from "./components/PricingPage";
import Services from "./components/ServicesPage";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" exact element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/about-us" element={<About />} />
          {/* <Route exact path="/pricing" element={<Pricing />} /> */}
          <Route exact path="/services" element={<Services />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      <ScrollToTop smooth className='scroll' />
    <Footer></Footer>
    </>
  );
}

export default App;
