import React, { useState } from "react";
import { BsMoonStarsFill, BsSun } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import logo from "/logo.png";

const Header = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "techStack",
    },
    {
      id: 4,
      link: "projects",
    },

    {
      id: 5,
      link: "contact",
    },
  ];
  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white fixed top-0 p-6 drop-shadow-lg w-full">
      <nav className="flex justify-evenly items-center p-15 text-md font-bold">
        <h2 className="text-xl pl-5 dark:text-gray-300">Henok.dev</h2>
        {/* <img className="h-5 w-5 object-cover " src={logo} /> */}
        <ul className="hidden md:flex ">
          {links.map(({ id, link }) => (
            <motion.li
              whileHover={{ scale: 1.2 }}
              key={id}
              className="px-4 cursor-pointer capitalize bg-transparent dark:bg-gray-900 text-gray-900 dark:text-gray-400 hover:text-gray-700  transition-all ease-in-out"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </motion.li>
          ))}
        </ul>

        <div onClick={() => setDarkMode(!darkMode)} className=" pr-5">
          {darkMode ? (
            <BsMoonStarsFill className="text-xl cursor-pointer" size={20} />
          ) : (
            <BsSun className="text-xl cursor-pointer" size={20} />
          )}
        </div>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10  bg-white dark:bg-gray-900 text-gray-900 dark:text-white md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
