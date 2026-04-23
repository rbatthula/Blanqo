import React from "react";
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
