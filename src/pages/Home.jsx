import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Propos from "../components/Propos";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Section1 from "../components/Section1";
import Note from "../components/Note";
import Car from "../components/Car";
import Faq from "../components/Faq";
import AvecChauffeur from "../components/AvecChauffeur";

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Hero />
      <Section />
      <Section1 />
      <Propos />
      <AvecChauffeur />
      <Car />
      <Faq />
      <Note />
      <Footer />
    </div>
  );
}

export default Home;
