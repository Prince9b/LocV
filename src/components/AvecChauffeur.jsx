import React from "react";
import avech from '../assets/avech.png'
import {motion} from 'framer-motion'

function AvecChauffeur() {
  return (
    <motion.div
    initial={{opacity:0, x:-50}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:2}}
     className="bg-base-200">
        <br />
        <br />
      <div className="card lg:card-side bg-base-200 shadow-sm">
        <figure className="h-100 p-5">
          <img
            src={avech}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title md:text-4xl text-2xl font-extrabold md:mt-10 mt-0 text-[var(--red-color)]">BESOIN D'UN CHAUFFEUR PRIVÉ ?</h2>
          <p className="font-bold">Pas de soucis! Nous avons une équipe de conducteurs professionnel <br /> pret à vous conduire en toute sécurité où vous le souhaitez.</p>
          <div className="card-actions justify-end">
            <button className="btn text-white bg-[var(--red-color)]">Contactez-nous</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AvecChauffeur;
