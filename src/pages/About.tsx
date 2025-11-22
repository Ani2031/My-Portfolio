import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const About = () => {
  const { theme } = useTheme();

  return (
    <main
      className={`min-h-screen pt-28 pb-16 px-6 transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-blue-600">Me</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I’m <b>Anish Prajapati</b> a passionate developer with a{" "}
          <b>Bachelor’s degree in Information Technology</b> (CGPA: <b>8.4</b>).
          <br />
          <br />
          My expertise lies in{" "}
          <b>
            React.js, Next.js (basic), Redux, TypeScript, Tailwind CSS, MUI,
            Bootstrap
          </b>
          , along with building{" "}
          <b>
            responsive designs, smooth animations with Framer Motion, and
            reusable components
          </b>
          .
          <br />
          <br />I also have knowledge of <b>Git & GitHub</b> for version control
          and backend development fundamentals with the <b>MERN stack</b>.
        </motion.p>
      </div>

      {/* Education / Experience Cards */}
      <div className="max-w-6xl mx-auto mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {[
          {
            title: "Education",
            desc: "Completed BE in Information Technology with a CGPA of 8.4.",
          },
          {
            title: "ImmersionX (Frontend Developer)",
            desc: "Worked on the company website and CMS frontend, focusing on building clean, responsive, and user-friendly interfaces.",
          },
          {
            title: "Champhunt Inc (Frontend Developer)",
            desc: "Contributed to the product-based company's website. Majorly worked on frontend development using the MERN stack to deliver scalable and engaging user experiences.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className={`rounded-2xl p-6 shadow-lg transition ${
              theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2 text-blue-600">
              {item.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call To Action */}
      <div className="mt-20 text-center">
        <motion.h3
          className="text-2xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Connect
        </motion.h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          I’m always excited to collaborate on new opportunities and projects.
          Feel free to reach out!
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg shadow-md transition"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
};

export default About;
