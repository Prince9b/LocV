import React from "react";
import { motion } from "framer-motion";
import sans from "../assets/sans.jpg";
import avec from "../assets/avec.jpg";
import avech from "../assets/avech.png";

function Section1() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className=" w-full min-h-screen bg-base-200 flex justify-center items-center flex-col gap-3"
      id="services"
    >
      <h1 className="md:text-4xl text-3xl font-extrabold mt-10 text-center text-black">
        NOS SERVICES
      </h1>
      <p className="text-center">
        Que vous planifiez une escapade de week-end, un voyage d’affaires ou une
        <br />
        aventure épique sur la route, nous avons le véhicule parfait pour
        répondre à vos besoins.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.2 }}
          viewport={{ once: true }}
          className="card bg-base-100 w-96 shadow-sm"
        >
          <div className="card-body bg-[var(--tree-color)]">
            <h2 className="card-title text-3xl text-white">
              LOCATION DE VOITURES
            </h2>
            <p className="text-white">
              Prêt à prendre le volant ?<br />A condition d'avoir un permis de
              conduire biensur
            </p>
          </div>
          <figure>
            <img src={sans} alt="Shoes" />
          </figure>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.4 }}
          viewport={{ once: true }}
          className="card bg-base-100 w-96 shadow-sm"
        >
          <div className="card-body bg-[var(--tree-color)]">
            <h2 className="card-title text-3xl text-white">AVEC CHAUFFEUR</h2>
            <p className="text-white">
              Detendez vous et Laissez votre chauffeur s'occuper de tout
            </p>
          </div>
          <figure>
            <img src={avec} alt="Shoes" />
          </figure>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 * 0.6 }}
          viewport={{ once: true }}
          className="card bg-base-100 w-96 shadow-sm"
        >
          <div className="card-body bg-[var(--tree-color)]">
            <h2 className="card-title text-3xl font-bold text-white">
              SERVICE VTC
            </h2>
            <p className="text-white">
              Facile , pratique et toujours avec le sourire.
            </p>
          </div>
          <figure>
            <img src={avec} className="" alt="Shoes" />
          </figure>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Section1;
