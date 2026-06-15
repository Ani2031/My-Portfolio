import {
  Mail,
  Linkedin,
  Github,
  Send,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   subject: "",
  //   message: "",
  // });

  const contactMethods = [
    {
      name: "Direct Email",
      value: "anishprajapati731@gmail.com",
      link:
        "https://mail.google.com/mail/?view=cm&fs=1&to=anishprajapati731@gmail.com",
      icon: <Mail size={24} />,
      color: "hover:border-red-500/30",
      iconColor: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-950/20",
    },
    {
      name: "LinkedIn",
      value: "anish-prajapati",
      link: "https://www.linkedin.com/in/anish-prajapati-9a794b218/",
      icon: <Linkedin size={24} />,
      color: "hover:border-blue-500/30",
      iconColor: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
    },
    {
      name: "GitHub",
      value: "Ani2031",
      link: "https://github.com/Ani2031",
      icon: <Github size={24} />,
      color: "hover:border-slate-500/30",
      iconColor: "text-slate-700 dark:text-white",
      bgColor: "bg-slate-100 dark:bg-slate-900/50",
    },
  ];

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   console.log(formData);

  //   setFormData({
  //     name: "",
  //     email: "",
  //     subject: "",
  //     message: "",
  //   });
  // };

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden bg-grid-pattern bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">

      <div className="absolute inset-0 bg-radial-gradient pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">
            Interested in collaborating on projects, full-stack development
            opportunities, or building scalable applications? Let's connect.
          </p>

          <div className="h-1 w-12 bg-blue-600 rounded mx-auto mt-4" />
        </div>

        <div className="space-y-5">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className={`glass-panel rounded-3xl p-6 flex items-center gap-5 transition-all border border-slate-200/50 dark:border-white/[0.04] ${method.color}`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${method.bgColor} ${method.iconColor}`}
              >
                {method.icon}
              </div>

              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {method.name}
                </h3>

                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {method.value}
                </p>
              </div>
            </motion.a>
          ))}

          <div className="glass-panel rounded-3xl p-6">
            <h3 className="font-bold mb-3">
              Current Focus
            </h3>

            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              Building scalable applications using React, Node.js,
              PostgreSQL, Sequelize, Socket.IO and modern frontend
              technologies.
            </p>
          </div>
        </div>

        {/* <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10"> */}

        {/* Left Contact Cards */}
        {/* <div className="space-y-5">

            {contactMethods.map((method, i) => (
              <motion.a
                key={i}
                href={method.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className={`glass-panel rounded-3xl p-6 flex items-center gap-5 transition-all border border-slate-200/50 dark:border-white/[0.04] ${method.color}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${method.bgColor} ${method.iconColor}`}
                >
                  {method.icon}
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">
                    {method.name}
                  </h3>

                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            ))}

            <div className="glass-panel rounded-3xl p-6">
              <h3 className="font-bold mb-3">
                Current Focus
              </h3>

              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Building scalable applications using React, Node.js,
                PostgreSQL, Sequelize, Socket.IO and modern frontend
                technologies.
              </p>
            </div>
          </div> */}

        {/* Right Contact Form */}
        {/* <motion.div
            className="glass-panel rounded-3xl p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6">
              Send Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40"
              />

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40"
              />

              <input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                className="w-full h-36 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/40 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-full flex items-center justify-center gap-2 hover:scale-[1.01] transition-all"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div> */}

        {/* </div> */}
      </div>
    </main>
  );
};

export default Contact;