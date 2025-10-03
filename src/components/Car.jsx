import React from "react";
import { motion } from "framer-motion";

import im from "../assets/im.jpg";
import im1 from "../assets/im1.jpg";
import im2 from "../assets/im2.jpg";
import im3 from "../assets/im3.jpg";
import i from "../assets/i.jpeg";
import bg from '../assets/bg.jpg'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'

function Car() {
  const cars = [
    { id: "1", marque: "Toyota", prix: "20.000", img: `${im}` },
    { id: "3", marque: "Kia", prix: "30.000", img: `${im2}` },
    { id: "4", marque: "Elantra", prix: "20.000", img: `${im3}` },
    { id: "5", marque: "Elantra", prix: "20.000", img: `${i}` },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-6 bg-base-200 w-full min-h-screen"
      id="voitures"
    >
      <h1 className="md:text-4xl text-3xl font-extrabold mt-5 text-center text-black">
        NOS VOITURES
      </h1>
      <p className="text-center mt-3">
        Nous disposons de plusieurs gammes de voitures allant de la Toyota a la
        Kia
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-15 ">
        {cars.map((car) => (
          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            key={car.id}
            className="bg-white rounded-l-sm shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img src={car.img} alt={car.marque} className=" object-cover w-full" />
            <div className="p-4 bg-base-200">
              <h2 className=" text-black font-bold md:text-2xl text-xl">
                {car.marque}
              </h2>
              <br />
              <p className="font-bold text-[var(--red-color)]">
                {car.prix} FCFA/jour
              </p>
              <p className="text-end">+223 00 00 00 00</p>
            </div>
          </motion.div>
        ))}
      </div>
      <h2 className="text-center text-xl text-[var(--red-color)] mt-5">Encore Plus</h2>
      <div className="carousel rounded-xl h-70 w-full mt-5 gap-2 ">
        <div className="carousel-item ">
          <img
            src={im}
            className=""
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={im1}
            className=""
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={im2}
            className=""
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={im3}
            className=""
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={bg1}
            className=""
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={bg2}
            className=""
            alt="Tailwind CSS Carousel component"
          />
        </div>
        <div className="carousel-item ">
          <img
            src={bg3}
            className=""
            alt="Tailwind CSS Carousel component"
          />
        </div>
        
      </div>
      <h1 className="text-center text-3xl text-[var(--red-color)]">...</h1>
    </motion.div>
  );
}

export default Car;
