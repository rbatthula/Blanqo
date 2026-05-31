import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import BookingForm from "../components/BookingForm";
import About from "../components/About";
import Services from "../components/Services";
import Process from "../components/Process";
import Cities from "../components/Cities";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      // Wait for layout to settle before scrolling
      const t = setTimeout(() => {
        const el = document.querySelector(target);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Clear the state so refresh doesn't re-scroll
        navigate(".", { replace: true, state: null });
      }, 250);
      return () => clearTimeout(t);
    }
  }, [location, navigate]);

  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <BookingForm />
      <About />
      <Services />
      <Process />
      <Cities />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
