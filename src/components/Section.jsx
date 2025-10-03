import React from "react";
import bg1 from "../assets/bg1.jpg";
import { motion } from "framer-motion";

function Section() {
  return (
    <div id="apropos">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero bg-black min-h-80"
      >
        <div className="hero-content flex-col">
          <h1 className="text-[var(--red-color)] md:text-7xl font-extrabold text-3xl ">LOUEZ L'ÉLÉGANCE </h1>
          <h1 className="md:text-7xl text-3xl font-extrabold text-center  text-white">
          SANS VOUS RUINEZ
          </h1>
        </div>

      </motion.div>
    </div>
  );
}

export default Section;
