import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Code,
  Database,
  Layers,
  Layout,
  Server,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const skills = [
    {
      icon: <Code size={26} />,
      title: "Frontend Development",
      desc: "React.js, Next.js, Redux, TypeScript",
    },
    {
      icon: <Layout size={26} />,
      title: "UI / UX & Styling",
      desc: "Tailwind CSS, MUI, Bootstrap, Responsive Design",
    },
    {
      icon: <Layers size={26} />,
      title: "Animations & Components",
      desc: "Framer Motion, Clean Component Architecture",
    },
    {
      icon: <Server size={26} />,
      title: "Backend Development",
      desc: "Node.js, Express.js, REST APIs",
    },
    {
      icon: <Database size={26} />,
      title: "Database & Performance",
      desc: "PostgreSQL, Sequelize, Redis",
    },
  ];

  return (
    <main
      className="
      relative
      min-h-screen
      pt-32
      pb-20
      px-6
      overflow-hidden
      bg-grid-pattern
      transition-colors
      duration-500
      bg-light-bg
      text-light-text
      dark:bg-dark-bg
      dark:text-dark-text
    "
    >
      {/* Background */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Building modern interfaces and creating smooth digital experiences.
          </p>

          <div className="h-1 w-12 rounded bg-blue-600 mt-5 mx-auto" />
        </motion.div>

        {/* About Section */}
        <motion.section
          className="glass-panel rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Who I Am
          </h2>

          <div className="space-y-5 text-slate-600 dark:text-slate-300 leading-relaxed">

            <p>
              Hi, I’m{" "}
              <span className="font-semibold text-slate-900 dark:text-white">
                Anish Prajapati
              </span>
              {" "}- a Full Stack Developer with a Bachelor's degree in Information
              Technology and experience building modern web applications, internal
              products, and scalable user experiences.
            </p>

            <p>
              My core expertise lies in developing high-quality frontend experiences
              using
              <strong>
                {" "}React.js, TypeScript, Next.js, Redux and modern UI systems
              </strong>
              , while maintaining strong attention to performance, usability, and
              clean architecture.
            </p>

            <p>
              Beyond frontend development, I work across the MERN ecosystem and have
              contributed to
              <strong>
                {" "}real-time communication systems, admin dashboards, CMS platforms,
                SaaS products, CRM workflows, and API-driven applications
              </strong>
              .
            </p>

            <p>
              I enjoy transforming ideas into polished digital products through
              scalable architecture, reusable components, backend collaboration,
              and thoughtful user experiences.
            </p>

          </div>

          {/* Action Buttons */}

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/experience"
              className="
        inline-flex
        items-center
        gap-2
        px-8
        py-3.5
        rounded-full
        text-white
        font-semibold
        bg-gradient-to-r
        from-blue-600
        to-indigo-600
        hover:scale-[1.02]
        transition
      "
            >
              View Experience
            </Link>

            <Link
              to="/contact"
              className="
        inline-flex
        items-center
        gap-2
        px-8
        py-3.5
        rounded-full
        border
        border-slate-300
        dark:border-slate-700
        hover:border-blue-500
        transition
      "
            >
              Contact Me
              <ArrowRight size={18} />
            </Link>

          </div>
        </motion.section>

        {/* Skills Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Technical Skills
            </h2>

            <p className="text-slate-500 dark:text-slate-400">
              Technologies and tools I use to build modern applications.
            </p>

            <div className="h-1 w-12 rounded bg-blue-600 mt-4 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                className="
                  glass-panel
                  rounded-3xl
                  p-8
                  text-center
                  relative
                  overflow-hidden
                  group
                  border
                  border-blue-500/20
                "
              >
                <Award
                  size={18}
                  className="
                    absolute
                    top-4
                    right-4
                    text-blue-500
                  "
                />

                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    mx-auto
                    mb-6
                    flex
                    items-center
                    justify-center
                    bg-blue-500/10
                    text-blue-500
                    group-hover:scale-110
                    transition
                  "
                >
                  {skill.icon}
                </div>

                <h3 className="font-bold text-lg mb-3">
                  {skill.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          className="
            mt-28
            glass-panel
            rounded-3xl
            p-12
            text-center
            relative
            overflow-hidden
          "
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="absolute left-0 top-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full" />

          <h3 className="text-3xl font-bold mb-4">
            Let’s Build Something Great
          </h3>

          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto mb-8">
            Interested in collaboration or building modern web experiences?
            Let’s connect.
          </p>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-2
              px-8
              py-4
              rounded-full
              text-white
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              hover:scale-[1.03]
              transition
            "
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </motion.section>
      </div>
    </main>
  );
};

export default About;