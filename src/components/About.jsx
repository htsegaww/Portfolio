import React from "react";
import Henok from "../assets/henok.png";
import Section from "./common/Section";

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen lg:p-24 bg-white dark:bg-gray-800"
    >
      <Section title="About">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-10 lg:w-[400px]">
          <img
            src={Henok}
            alt=""
            className="h-full w-full lg:w-full lg:h-full object-cover object-top rounded-lg "
          />

          <div className="flex flex-col items-center lg:items-start justify-center gap-2 ">
            <h1 className="text-xl font-bold mb-5 text-left ml-10">About Me</h1>
            <h1 className="text-2xl w-80 lg:w-96 font-bold text-left lg:ml-10 ">
              A dedicated Front-end Developer based in Indiana, United States📍
            </h1>
            <p className="text-gray-500 text-left lg:w-[400px] ml-10 mt-1">
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
              excel in designing and maintaining responsive websites that offer
              a smooth user experience. My expertise lies in crafting dynamic,
              engaging interfaces through writing clean and optimized code and
              utilizing cutting-edge development tools and techniques. I am also
              a team player who thrives in collaborating with cross-functional
              teams to produce outstanding web applications.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
