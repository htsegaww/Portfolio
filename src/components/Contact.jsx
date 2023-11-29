import React from "react";
import Section from "./common/Section";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = () => {
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
    <div name="contact" className="min-h-screen lg:p-24">
      <Section title="Contact" subtitle="Feel free to contact me :)">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          {/* <div>
            <img src={contact} alt="contact" className="h-32 w-32" />
          </div> */}
          <div>
            <p className="max-w-xs md:max-w-lg font-extralight">
              I am open to new opportunities. Feel free to contact me via these
              platforms
            </p>
          </div>
          <div className="flex w-full items-center justify-center gap-5 text-3xl">
            {socials.map(({ id, link, icon }) => (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-200 ease-in-out hover:text-gray-500"
              >
                {icon}
              </a>
            ))}
          </div>
          {/* FORM */}
          <div className="p-5 text-left w-full">
            <form
              action="https://getform.io/f/34d636b3-7207-4da1-8ba9-631ddec77ee0"
              method="POST"
            >
              <div className="gap-4 w-full">
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-extralight">
                    name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-extralight">
                    email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="capitalize text-sm py-2 font-extralight">
                    message
                  </label>
                  <textarea
                    rows="10"
                    name="message"
                    placeholder="Enter email address"
                    className="border-2 rounded-lg p-3 flex focus:outline-none
                  border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                  ></textarea>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="flex items-center justify-center mt-10 bg-teal-600 px-40 py-3 text-white rounded-lg uppercase tracking-wider cursor-pointer hover:scale-105 duration-200">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default contacts;
