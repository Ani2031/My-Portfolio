import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen pt-28 pb-10 px-6 transition-all duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
          Whether you’re a recruiter, potential client, or just want to say
          hello, I’d love to hear from you. You can reach me through this form
          or directly via email and social links below.
        </p>

        {/* Contact Form
        <form className="grid gap-4 text-left">
          <input
            type="text"
            placeholder="Your Full Name"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <input
            type="text"
            placeholder="Subject (e.g. Job Opportunity)"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white h-32"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 dark:hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form> */}

        {/* Extra Contact Options */}
        <div className="mt-10 flex flex-row justify-center items-center gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=anishprajapati731@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
          >
            <Mail />
          </a>
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
        </div>
      </div>
    </main>
  );
};

export default Contact;
