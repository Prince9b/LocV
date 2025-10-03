import React from "react";
import bg1 from "../assets/bg1.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div id="acceuil">
      <motion.div
        className="hero md:min-h-screen h-150"
        style={{
          backgroundImage: `url(${bg1})`,
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 md:text-6xl text-3xl font-extrabold">
              LOUEZ RAPIDEMENT A   BAMAKO
            </h1>
            <p className="mb-5 text-xl mt-8  ">
              Que ce soit pour une escapade de week-end, un voyage d'affaire ou
              une aventure epique sur la route, nous avons le vehicule parfait
              pour vous.
            </p>
            <button className="btn bg-[var(--red-color)] border-0 text-white mt-3">
              Je Reserve
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
