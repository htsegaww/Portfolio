import React from "react";
import { FaLinkedin, FaArrowDown, FaGithub } from "react-icons/fa";
import Henok from "../assets/henok.png";
const Home = () => {
  const socials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/henoktsegaw/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/htsegaww",
      icon: <FaGithub />,
    },
  ];
  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });
  return (
    <section className="min-h-screen lg:p-60" name="home">
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 m-auto text-center">
        <div className="flex flex-col gap-2 mt-24 lg:mt-0 justify-center items-center">
          <h3 className=" max-w-sm p-10  md:mt-20 lg:max-w-[550px] py-1 text-3xl lg:text-6xl capitalize font-semibold text-center lg:text-left">
            Front-End React Developer
            <span className="animate-pulse text-6xl">👋🏽</span>
          </h3>
          <p className="lg:max-w-[550px] max-w-[450px] font-normal text-xl text-gray-700 p-5 mt-5 lg:text-left lg:ml-10 dark:text-gray-400 ">
            Hi ,I'm Henok Tsegaw. A Front End developer who is passionate about
            making error-free websites. I love to solve real-world problems. I
            am strategic, goal-oriented, and always work with an end goal in
            mind.
          </p>

          {/* SOCIALS SECTION */}
          <div className="flex justify-center items-center gap-5 py-8 lg:py-7 text-xl w-full md:1/3">
            {" "}
            {socials.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer duration-300 hover:text-gray-500 text-3xl"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* profile picture and resume section */}
        <div className="flex justify-center items-center flex-col">
          <img
            src={Henok}
            alt="profile"
            className="h-full w-full md:96 md:h-96 object-cover object-top rounded-lg px-5"
          />
          <a
            href="/Henok-resume.pdf"
            download={true}
            // className="flex items-center justify-center mt-10 bg-teal-600 text-white py-2 rounded-lg"
            className="flex items-center justify-center mt-10 px-40 py-3 bg-teal-600 text-white rounded-lg uppercase tracking-wider cursor-pointer hover:scale-105 duration-200"
          >
            Resume
          </a>
          {/* arrow animation */}
          <div className="mt-10 down-arrow flex justify-center items-center">
            <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
