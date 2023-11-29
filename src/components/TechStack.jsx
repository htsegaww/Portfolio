import React from "react";
import Section from "./common/Section";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import material from "../assets/material.png";
import firebase from "../assets/firebase.png";

const TechStack = () => {
  const techs = [
    {
      id: 1,
      image: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      image: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      image: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      image: node,
      title: "NODE",
      style: "shadow-green-600",
    },
    {
      id: 5,
      image: tailwind,
      title: "TAILWIND",
      style: "shadow-teal-600",
    },
    {
      id: 6,
      image: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 7,
      image: python,
      title: "PYTHON",
      style: "shadow-yellow-600",
    },
    {
      id: 8,
      image: material,
      title: "MATERIALUI",
      style: "shadow-blue-600",
    },
    {
      id: 9,
      image: firebase,
      title: "FIREBASE",
      style: "shadow-orange-600",
    },
  ];
  return (
    <div name="techStack" className="min-h-screen lg:p-24">
      <Section
        title="Tech Stack"
        subtitle="These are some technologies that I have worked with"
      >
        <div className="grid gap-10 lg:grid-cols-4">
          {techs.map(({ id, image, title, style }) => (
            <div
              key={id}
              className={`flex flex-col items-center justify-center p-5 shadow-lg shadow-gray-400 dark:${style} rounded-xl duration-300 ease-in-out hover:scale-110 cursor-pointer ${style}`}
            >
              <img
                src={image}
                alt={title}
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
              <h3 className="mt-5 text-base">{title}</h3>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default TechStack;
