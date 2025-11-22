import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const { theme } = useTheme();

  const baseStyles =
    "transition-all duration-500 ease-in-out min-h-screen w-full px-6 pt-28 pb-10";

  const skills = [
    { name: "React", icon: <SiReact className="text-sky-500" /> },
    // {
    //   name: "Next.js",
    //   icon: <SiNextdotjs className="text-gray-900 dark:text-white" />,
    // },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
    { name: "MUI", icon: <SiMui className="text-blue-500" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-violet-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  ];

  return (
    <main
      className={`${baseStyles} ${
        theme === "dark"
          ? "bg-gray-900 text-white font-sans"
          : "bg-white text-gray-900 font-sans"
      }`}
    >
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-blue-600">Anish</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-6 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          A passionate <b>MERN Stack Developer</b> skilled in{" "}
          <b>React, Redux, TypeScript</b>, and modern UI libraries like{" "}
          <b>Tailwind, Material UI, Bootstrap</b>. I build scalable web apps
          with beautiful UI and strong backend logic.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-md cursor-default transition
              ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }
            `}
            >
              <span className="text-xl">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto mb-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Featured Projects
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Chat App",
              desc: "Real-time group chat app with Socket.IO, media support, and React.js.",
              tech: "React.js, Socket.IO",
            },
            {
              title: "E-Commerce Store",
              desc: "Modern MERN e-commerce app with product listing, cart, buy & JWT auth.",
              tech: "MERN, Redux, Mui",
            },
            {
              title: "Theme Switcher",
              desc: "Website with multi-theme switcher using Localstorage and smooth animations.",
              tech: "React, Tailwind, Framer Motion",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              className={`rounded-xl p-6 shadow-lg transition ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="mb-2">{proj.desc}</p>
              <p className="text-sm text-blue-600">{proj.tech}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Interested in working together or just want to chat? Feel free to
          reach out.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Ani2031"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/anish-prajapati-9a794b218/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anishprajapati731@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            <Mail />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
