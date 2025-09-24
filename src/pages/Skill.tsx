import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { Code, Database, Layers, Layout, Server } from "lucide-react";

const Skills = () => {
  const { theme } = useTheme();

  const baseStyles =
    "min-h-screen pt-28 pb-10 px-6 transition-all duration-300";

  const themeStyles =
    theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white";

  const skills = [
    {
      icon: <Code size={36} />,
      title: "Frontend Development",
      desc: "React.js, Next.js (basic), Redux, TypeScript",
      highlight: true, // highlight this
    },
    {
      icon: <Layout size={36} />,
      title: "UI/UX & Styling",
      desc: "Tailwind CSS, MUI, Bootstrap, Responsive Design",
      highlight: true, // highlight this
    },
    {
      icon: <Layers size={36} />,
      title: "Animations & Components",
      desc: "Framer Motion, Clean Component Architecture",
    },
    {
      icon: <Server size={36} />,
      title: "Version Control",
      desc: "Git Commands, GitHub",
    },
    {
      icon: <Database size={36} />,
      title: "Backend Basics",
      desc: "MERN Basics (Node.js, Express, MongoDB, Mongoose)",
    },
  ];

  return (
    <main className={`${baseStyles} ${themeStyles}`}>
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-12">My Skills</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl p-6 shadow-lg transition ${
                theme === "light" ? "bg-white" : "bg-gray-800"
              } ${skill.highlight ? "border-2 border-blue-500" : ""}`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="mb-4 text-blue-600 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Skills;
