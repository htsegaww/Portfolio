import React from "react";
import Section from "./common/Section";
import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "TechStore E-commerce App",
      description:
        "Tech store is an e-commerce full-stack app where users can create their own account using Auth and buy electronics. This app includes stripe as a payment service and AUTH0 for authentication. Users can filter colors, prices, categories and companies of the items.",

      tech1: "React",
      tech2: "Styled Component",
      tech3: "Stripe",
      tech4: "Auth0",
      github: "https://github.com/htsegaww/TechStore-e-commerce",
      demo: "https://techstorets.netlify.app/",
    },
    {
      id: 3,
      image: project2,
      title: "Todo-List app",
      tech1: "React",
      tech2: "CSS",
      description:
        "A simple todo List app where users can add todo lists. This app allows users to do CRUD (create , read, Update and Delete). Users can also filter depend on the Status. This app introduces the concept of React File structure, React State Management using REDUX",
      github: "https://github.com/htsegaww/Todo-App",
      demo: "https://to-do-react-redux-app.netlify.app/",
    },
    {
      id: 2,
      image: project3,
      title: "HenoGram",
      description:
        "Heno Gram is a web app where users can create their own account and pictures they have taken. The purpose of this app is for users to upload their OWN pictures and share it with their friends. Users can check the person that uploaded the picture and when it was uploaded by hovering over each image. This app introduces the concept of Firebase authentication, and Database",

      tech1: "React",
      tech2: "Tailwind CSS",
      tech3: "Firebase",
      github: "https://github.com/htsegaww/HenoGram",
      demo: "https://henogram.netlify.app/",
    },
  ];
  return (
    <div
      name="projects"
      className=" min-h-screen lg:p-24 bg-white dark:bg-gray-800"
    >
      {/* grid gap-8 lg:gird lg:grid-col */}
      <Section
        title="Projects"
        subtitle="These are the projects I have worked on..."
      >
        <div className="flex flex-col gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className="max-w-lg rounded-2xl overflow-hidden flex justify-evenly items-start py-5 gap-10 lg:max-w-5xl lg:max-h-screen px-5
               bg-white dark:bg-gray-900 shadow-2xl dark:shadow-slate-500 "
            >
              <img
                src={p.image}
                className="lg:h-96 lg:w-96 rounded-2xl w-2/3 object-contain "
              />
              <div className="w-1/3 flex flex-col items-center justify-evenly p-1 gap-10">
                <p className="w-28 text-left lg:w-[300px] font-bold dark:text-gray-400">
                  {p.title}
                </p>
                <p className="hidden lg:block lg:text-left dark:text-gray-400">
                  {p.description}
                </p>

                <div className="hidden lg:flex justify-center items-center gap-3 text-sm max-w-96">
                  {p?.tech1 && (
                    <p className="py-2 px-4 bg-gray-300 rounded-md text-gray-900 ">
                      {p.tech1}
                    </p>
                  )}
                  {p?.tech2 && (
                    <p className="px-1 py-2 bg-gray-300 rounded-md text-gray-900">
                      {p.tech2}
                    </p>
                  )}
                  {p?.tech3 && (
                    <p className="py-2 px-1 bg-gray-300 rounded-md text-gray-900">
                      {p.tech3}
                    </p>
                  )}
                  {p?.tech4 && (
                    <p className="py-2 px-1 bg-gray-300 rounded-md text-gray-900">
                      {p.tech4}
                    </p>
                  )}
                </div>
                <div className="flex gap-10 justify-center items-center">
                  <a
                    className="text-lg cursor-pointer duration-150 hover:scale-110 flex justify-center items-center gap-3 dark:text-gray-400"
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hidden lg:block">Code</span>
                    <FaGithub size={30} />
                  </a>
                  <a
                    className="text-lg cursor-pointer duration-150 hover:scale-110 flex justify-center items-center gap-3 dark:text-gray-400"
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="hidden lg:block">Live Demo</span>
                    <FaExternalLinkSquareAlt size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;

/*{       id,          image,title,
              description,
              github,
              demo,
              tech1,
              tech2,
              tech3,
              tech4,
            }

            */
