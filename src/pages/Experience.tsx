import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
} from "lucide-react";

const experienceData = [
  {
    icon: <Briefcase size={24} />,
    label: "Experience",
    title: "MotionLabs",
    subtitle: "Full Stack Developer (July 2025 – May 2026)",
    badge: "MERN Stack",

    desc: [

      "Delivered client projects including website revamps, admin panels, and UI redesign initiatives with focus on usability, responsiveness, and performance.",

      "Developed full-stack features using React.js, Redux, Node.js, Express.js, PostgreSQL, and integrated REST APIs across multiple applications.",

      "Built and maintained administration dashboards with role-based access control, data management workflows, and operational tools.",

      "Contributed to company in-house products including an internal administration system and a Jira-style task management platform to improve team collaboration and execution.",

      "Worked on a SaaS-based CRM product by implementing dashboard interfaces, API integrations, and business workflow features.",

      "Implemented real-time functionality and collaborated across cross-functional teams to deliver scalable, maintainable, and production-ready solutions.",

    ],
  },
  {
    icon: <Briefcase size={24} />,
    label: "Experience",
    title: "Champhunt Inc - Remote",
    subtitle: "Full Stack Developer (May 2024 - July 2025)",
    badge: "MERN Stack",
    desc: [
      "Revamped and enhanced multiple website pages with improved UI, responsiveness, and overall user experience.",

      "Worked on API integration and optimization to improve application performance and reduce frontend loading delays.",

      "Developed and contributed to 'Dugout', a real-time group chat feature with frontend implementation and Socket.IO integration.",

      "Implemented messaging capabilities including text messages, media/file sharing, GIF support, stickers, and message reply functionality.",

      "Integrated real-time communication flows and collaborated closely with backend developers for seamless frontend-backend synchronization.",

      "Built and improved admin-side interfaces while contributing new features, maintenance, and bug fixes across the platform.",

      "Contributed across the MERN stack to deliver scalable and interactive product experiences.",
    ],
  },
  {
    icon: <Briefcase size={24} />,
    label: "Experience",
    title: "ImmersionX - Onsite",
    subtitle: "Web Developer (Jan 2024 - May 2024)",
    badge: "CMS & Web",
    desc: [
      "Designed and maintained the company website with focus on responsiveness and user experience.",
      "Developed frontend interfaces for CMS-based client projects using modern web technologies.",
      "Built reusable UI components and implemented responsive layouts across devices.",
      "Worked closely on project maintenance, enhancements, and feature improvements.",
      "Contributed to backend integration and supported API-related implementation when required.",
    ],
  },
  {
    icon: <GraduationCap size={24} />,
    label: "Education",
    title: "Bachelor of Engineering",
    subtitle: "Information Technology",
    badge: "CGPA 8.4",
    desc:
      "Built a strong foundation in software engineering, web technologies, and scalable application development while maintaining consistent academic performance and hands-on project experience.",
  },
];

const Experience = () => {
  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern bg-light-bg dark:bg-dark-bg">

      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}

        <div className="text-center mb-20">

          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">

            Experience &

            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              {" "}Growth
            </span>

          </h1>

          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Education and professional experience shaping my development journey.
          </p>

          <div className="h-1 w-12 rounded bg-blue-600 mx-auto mt-5" />

        </div>

        {/* Cards */}
        <div className="space-y-8">
          {experienceData.map((item, i) => (
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
              transition={{
                delay: i * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
        glass-panel
        rounded-3xl
        p-8
        border
        border-slate-200/50
        dark:border-white/[0.04]
      "
            >
              <div className="flex flex-col lg:flex-row gap-6">

                {/* Icon */}
                <div
                  className="
            w-16
            h-16
            rounded-2xl
            flex
            items-center
            justify-center
            bg-blue-500/10
            text-blue-500
            shrink-0
          "
                >
                  {item.icon}
                </div>

                {/* Content */}

                <div className="flex-1">

                  <div className="flex justify-between flex-wrap gap-4">

                    <div>

                      <span className="text-xs uppercase tracking-[0.2em] text-blue-500 font-semibold">
                        {item.label}
                      </span>

                      <h2 className="text-3xl font-bold mt-3">
                        {item.title}
                      </h2>

                      <p className="text-slate-500 mt-1">
                        {item.subtitle}
                      </p>

                    </div>

                    <div
                      className="
                px-4
                py-2
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/5
                text-blue-500
                text-sm
                h-fit
              "
                    >
                      {item.badge}
                    </div>

                  </div>

                  {/* Description */}

                  {Array.isArray(item.desc) ? (
                    <ul className="mt-8 space-y-4">

                      {item.desc.map((point, idx) => (
                        <li
                          key={idx}
                          className="
                    flex
                    items-start
                    gap-3
                    text-slate-600
                    dark:text-slate-300
                    leading-relaxed
                  "
                        >
                          <div
                            className="
                      mt-[10px]
                      w-2
                      h-2
                      rounded-full
                      bg-blue-500
                      shrink-0
                    "
                          />

                          <span>
                            {point}
                          </span>

                        </li>
                      ))}

                    </ul>
                  ) : (
                    <p className="mt-8 text-slate-600 dark:text-slate-300 leading-8">
                      {item.desc}
                    </p>
                  )}

                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="mt-20 text-center">

          <Link
            to="/projects"
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
              hover:scale-[1.02]
              transition
            "
          >
            View Projects
            <ArrowRight size={18} />
          </Link>

        </div> */}

      </div>
    </main>
  );
};

export default Experience;
