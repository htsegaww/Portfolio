import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();

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
  return (
    <section className="min-h-fit flex justify-evenly items-center p-5 text-center bg-gray-700">
      <div className="mt-10">
        <p className="max-w-xl font-light text-white mb-10">
          Copyright by ©Henok, {date}
        </p>
      </div>
      <div className="flex gap-5 justify-center items-center text-white">
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
    </section>
  );
};

export default Footer;
