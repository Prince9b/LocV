import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import React from "react";
import { MdMail } from "react-icons/md";

function Navbar() {
  return (
    <div className="flex flex-col fixed w-full z-40">
      <div
        id="home"
        className="w-full h-10 bg-[var(--two-color)] gap-10  flex items-center justify-start "
      >
        <div className="container-fluid flex gap-10 ml-5">
          <div className="flex gap-2 items-center">
            <MdMail size={20} color="var(--red-color)" className="" />
            <span className="text-white font-normal">locv@gmail.com</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaPhoneAlt size={20} color="var(--red-color)" className="" />
            <span className="text-white font-normal">+223 00 00 00 00</span>
          </div>
        </div>
      </div>
      <div className="navbar bg-gray-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="#home">Accueil</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#voitures">Voitures</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl rounded-xl">BKO LOCATION</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="#acceuil">Accueil</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#voitures">Voitures</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
